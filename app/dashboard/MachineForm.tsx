"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BRANDS = [
  "Makino", "Mazak", "Cincinnati", "Matsuura", "Haas",
  "TOS", "Emmegi", "Fanuc", "Siemens", "Hurco",
  "DMG Mori", "Okuma", "Hankook", "Doosan", "Hardinge",
  "Other",
];

const MACHINE_TYPES = [
  "CNC Lathe",
  "CNC Mill (Vertical)",
  "CNC Mill (Horizontal)",
  "5-Axis Machining Center",
  "Turn-Mill Center",
  "Swiss Lathe",
  "EDM",
  "Grinding",
  "Other",
];

const STATUSES = [
  { value: "available", label: "Available" },
  { value: "pending", label: "Pending" },
  { value: "sold", label: "Sold" },
];

export type MachineFormValues = {
  title: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  status: string;
  description: string;
  machineType: string;
  controlType: string;
  axes: string;
  spindleRPM: string;
  tableSize: string;
  travels: string;
  hours: string;
  weight: string;
  location: string;
  inspectionAvailable: boolean;
  sellerName: string;
  sellerContact: string;
};

export type ExistingPhoto = {
  _key: string;
  assetId: string;
  url: string;
};

export const emptyMachineForm: MachineFormValues = {
  title: "",
  brand: "",
  model: "",
  year: "",
  price: "",
  status: "available",
  description: "",
  machineType: "",
  controlType: "",
  axes: "",
  spindleRPM: "",
  tableSize: "",
  travels: "",
  hours: "",
  weight: "",
  location: "",
  inspectionAvailable: true,
  sellerName: "",
  sellerContact: "",
};

type Props = {
  mode: "create" | "edit";
  machineId?: string;
  initialValues?: MachineFormValues;
  initialPhotos?: ExistingPhoto[];
};

const inputClass =
  "w-full bg-white border border-border-light text-machine-black rounded-lg p-3 focus:border-signal focus:outline-none transition-colors";
const labelClass = "block text-sm font-medium text-machine-black mb-2";

export default function MachineForm({
  mode,
  machineId,
  initialValues = emptyMachineForm,
  initialPhotos = [],
}: Props) {
  const router = useRouter();
  const [values, setValues] = useState<MachineFormValues>(initialValues);
  const [existingPhotos, setExistingPhotos] =
    useState<ExistingPhoto[]>(initialPhotos);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof MachineFormValues>(
    key: K,
    v: MachineFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    setNewFiles((prev) => [...prev, ...files]);
    e.target.value = "";
  }

  function removeExistingPhoto(key: string) {
    setExistingPhotos((prev) => prev.filter((p) => p._key !== key));
  }

  function removeNewFile(idx: number) {
    setNewFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  async function uploadFile(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload-photo", {
      method: "POST",
      body: fd,
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Upload failed");
    }
    const data = await res.json();
    return data.assetId as string;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!values.title.trim() || !values.brand || !values.model.trim()) {
      setError("Title, brand, and model are required.");
      return;
    }

    setSubmitting(true);
    try {
      const uploadedAssetIds: string[] = [];
      for (const file of newFiles) {
        const id = await uploadFile(file);
        uploadedAssetIds.push(id);
      }

      const payload = {
        ...values,
        year: values.year ? Number(values.year) : undefined,
        price: values.price ? Number(values.price) : undefined,
        axes: values.axes ? Number(values.axes) : undefined,
        spindleRPM: values.spindleRPM ? Number(values.spindleRPM) : undefined,
        hours: values.hours ? Number(values.hours) : undefined,
        existingPhotos: existingPhotos.map((p) => ({
          _key: p._key,
          assetId: p.assetId,
        })),
        newPhotoAssetIds: uploadedAssetIds,
      };

      const url =
        mode === "create" ? "/api/machines" : `/api/machines/${machineId}`;
      const method = mode === "create" ? "POST" : "PATCH";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Save failed");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl">
      {error && (
        <div className="bg-[rgba(229,62,62,0.08)] border border-danger rounded-lg p-4 text-sm text-danger">
          {error}
        </div>
      )}

      <section className="bg-white border border-border-light rounded-xl p-8">
        <h2 className="text-lg font-semibold text-machine-black mb-6">
          Basic information
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <label className={labelClass} htmlFor="title">
              Listing title *
            </label>
            <input
              id="title"
              type="text"
              value={values.title}
              onChange={(e) => update("title", e.target.value)}
              className={inputClass}
              placeholder="Mazak Quick Turn 250MSY 2018"
              required
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="brand">
              Brand *
            </label>
            <select
              id="brand"
              value={values.brand}
              onChange={(e) => update("brand", e.target.value)}
              className={inputClass}
              required
            >
              <option value="">Select brand</option>
              {BRANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="model">
              Model *
            </label>
            <input
              id="model"
              type="text"
              value={values.model}
              onChange={(e) => update("model", e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="year">
              Year
            </label>
            <input
              id="year"
              type="number"
              value={values.year}
              onChange={(e) => update("year", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="price">
              Price (CAD)
            </label>
            <input
              id="price"
              type="number"
              value={values.price}
              onChange={(e) => update("price", e.target.value)}
              className={inputClass}
              placeholder="Leave empty for 'Contact'"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="status">
              Status
            </label>
            <select
              id="status"
              value={values.status}
              onChange={(e) => update("status", e.target.value)}
              className={inputClass}
            >
              {STATUSES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="bg-white border border-border-light rounded-xl p-8">
        <h2 className="text-lg font-semibold text-machine-black mb-6">
          Photos
        </h2>

        {(existingPhotos.length > 0 || newFiles.length > 0) && (
          <div className="grid grid-cols-4 gap-4 mb-6">
            {existingPhotos.map((p) => (
              <div
                key={p._key}
                className="relative aspect-[4/3] bg-concrete rounded-lg overflow-hidden border border-border-light"
              >
                <Image
                  src={p.url}
                  alt="Machine photo"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <button
                  type="button"
                  onClick={() => removeExistingPhoto(p._key)}
                  className="absolute top-2 right-2 bg-machine-black text-bright text-xs px-2 py-1 rounded-md hover:bg-danger transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            {newFiles.map((file, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] bg-concrete rounded-lg overflow-hidden border border-border-light"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  fill
                  className="object-cover"
                  sizes="200px"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 bg-machine-black/80 text-bright text-xs px-2 py-1 truncate">
                  New: {file.name}
                </div>
                <button
                  type="button"
                  onClick={() => removeNewFile(idx)}
                  className="absolute top-2 right-2 bg-machine-black text-bright text-xs px-2 py-1 rounded-md hover:bg-danger transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="inline-flex items-center gap-3 cursor-pointer bg-workshop border border-border-light rounded-lg px-5 py-3 hover:border-signal transition-colors">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-sm font-medium text-machine-black">
            + Add photos
          </span>
        </label>
        <p className="text-xs text-shop-grey mt-2">
          First photo is used as the main listing image.
        </p>
      </section>

      <section className="bg-white border border-border-light rounded-xl p-8">
        <h2 className="text-lg font-semibold text-machine-black mb-6">
          Description
        </h2>
        <textarea
          value={values.description}
          onChange={(e) => update("description", e.target.value)}
          rows={5}
          className={inputClass}
          placeholder="General description, condition notes, reason for selling..."
        />
      </section>

      <section className="bg-white border border-border-light rounded-xl p-8">
        <h2 className="text-lg font-semibold text-machine-black mb-6">
          Technical specifications
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="machineType">
              Machine type
            </label>
            <select
              id="machineType"
              value={values.machineType}
              onChange={(e) => update("machineType", e.target.value)}
              className={inputClass}
            >
              <option value="">Select type</option>
              {MACHINE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="controlType">
              Control type
            </label>
            <input
              id="controlType"
              type="text"
              value={values.controlType}
              onChange={(e) => update("controlType", e.target.value)}
              className={inputClass}
              placeholder="e.g. Fanuc 31i-B"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="axes">
              Number of axes
            </label>
            <input
              id="axes"
              type="number"
              value={values.axes}
              onChange={(e) => update("axes", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="spindleRPM">
              Max spindle RPM
            </label>
            <input
              id="spindleRPM"
              type="number"
              value={values.spindleRPM}
              onChange={(e) => update("spindleRPM", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="tableSize">
              Table / chuck size
            </label>
            <input
              id="tableSize"
              type="text"
              value={values.tableSize}
              onChange={(e) => update("tableSize", e.target.value)}
              className={inputClass}
              placeholder="500mm x 1000mm"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="travels">
              Axis travels (X / Y / Z)
            </label>
            <input
              id="travels"
              type="text"
              value={values.travels}
              onChange={(e) => update("travels", e.target.value)}
              className={inputClass}
              placeholder="X: 1020mm, Y: 510mm, Z: 510mm"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="hours">
              Spindle hours
            </label>
            <input
              id="hours"
              type="number"
              value={values.hours}
              onChange={(e) => update("hours", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="weight">
              Machine weight
            </label>
            <input
              id="weight"
              type="text"
              value={values.weight}
              onChange={(e) => update("weight", e.target.value)}
              className={inputClass}
              placeholder="8,500 kg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white border border-border-light rounded-xl p-8">
        <h2 className="text-lg font-semibold text-machine-black mb-6">
          Location
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="location">
              City / region
            </label>
            <input
              id="location"
              type="text"
              value={values.location}
              onChange={(e) => update("location", e.target.value)}
              className={inputClass}
              placeholder="Montreal, QC"
            />
          </div>

          <div className="flex items-end">
            <label className="inline-flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={values.inspectionAvailable}
                onChange={(e) =>
                  update("inspectionAvailable", e.target.checked)
                }
                className="w-5 h-5 accent-signal"
              />
              <span className="text-sm text-machine-black">
                AVI inspection available
              </span>
            </label>
          </div>
        </div>
      </section>

      <section className="bg-white border border-border-light rounded-xl p-8">
        <h2 className="text-lg font-semibold text-machine-black mb-2">
          Seller details
        </h2>
        <p className="text-xs text-shop-grey mb-6">
          Internal only. Not shown on the public listing.
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="sellerName">
              Seller name
            </label>
            <input
              id="sellerName"
              type="text"
              value={values.sellerName}
              onChange={(e) => update("sellerName", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="sellerContact">
              Seller contact
            </label>
            <input
              id="sellerContact"
              type="text"
              value={values.sellerContact}
              onChange={(e) => update("sellerContact", e.target.value)}
              className={inputClass}
              placeholder="Phone or email"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="bg-signal hover:bg-signal-dark text-machine-black px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting
            ? "Saving..."
            : mode === "create"
            ? "Create machine"
            : "Save changes"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="border border-border-light text-machine-black px-8 py-3 rounded-lg font-medium hover:bg-concrete transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
