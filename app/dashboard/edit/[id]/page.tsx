"use client";

import { use, useEffect, useState } from "react";
import MachineForm, {
  emptyMachineForm,
  type MachineFormValues,
  type ExistingPhoto,
} from "../../MachineForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default function EditMachinePage({ params }: Props) {
  const { id } = use(params);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [values, setValues] = useState<MachineFormValues | null>(null);
  const [photos, setPhotos] = useState<ExistingPhoto[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(`/api/machines/${id}`);
        if (!res.ok) throw new Error("Failed to load machine");
        const data = await res.json();
        if (cancelled) return;

        const m = data.machine;
        setValues({
          ...emptyMachineForm,
          title: m.title || "",
          brand: m.brand || "",
          model: m.model || "",
          year: m.year?.toString() || "",
          price: m.price?.toString() || "",
          status: m.status || "available",
          description: m.description || "",
          machineType: m.machineType || "",
          controlType: m.controlType || "",
          axes: m.axes?.toString() || "",
          spindleRPM: m.spindleRPM?.toString() || "",
          tableSize: m.tableSize || "",
          travels: m.travels || "",
          hours: m.hours?.toString() || "",
          weight: m.weight || "",
          location: m.location || "",
          inspectionAvailable: m.inspectionAvailable ?? true,
          sellerName: m.sellerName || "",
          sellerContact: m.sellerContact || "",
        });
        setPhotos(data.photos || []);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="p-10">
        <p className="text-shop-grey">Loading machine...</p>
      </div>
    );
  }

  if (error || !values) {
    return (
      <div className="p-10">
        <p className="text-danger">{error || "Machine not found."}</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-machine-black mb-1">
          Edit Machine
        </h1>
        <p className="text-sm text-shop-grey">
          Update the details for this listing.
        </p>
      </div>
      <MachineForm
        mode="edit"
        machineId={id}
        initialValues={values}
        initialPhotos={photos}
      />
    </div>
  );
}
