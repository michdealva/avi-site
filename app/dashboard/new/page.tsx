"use client";

import MachineForm from "../MachineForm";

export default function NewMachinePage() {
  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-machine-black mb-1">
          Add Machine
        </h1>
        <p className="text-sm text-shop-grey">
          Create a new listing in the inventory.
        </p>
      </div>
      <MachineForm mode="create" />
    </div>
  );
}
