"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteMachineButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const ok = window.confirm(
      `Delete "${title}"? This cannot be undone.`
    );
    if (!ok) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/machines/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete machine.");
      }
    } catch {
      alert("Failed to delete machine.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-danger hover:underline disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
