"use client";
import { Tracker } from "@tremor/react";

export default function TrackerHero() {
  return (
    <div className="w-[600px] mx-auto mt-5 border rounded p-5">
      <div className="mx-auto max-w-md">
        <Tracker
          data={[
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "yellow", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "red", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "yellow", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "red", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "yellow", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
            { color: "emerald", tooltip: "Tracker Info" },
          ]}
        />
      </div>
    </div>
  );
}
