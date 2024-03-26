"use client";
import { ProgressCircle } from "@tremor/react";

export default function ProgressCircleHero() {
  return (
    <div className="w-[600px] mx-auto mt-5 border rounded p-5">
      <div className="mx-auto grid grid-cols-1 gap-12">
        <div className="flex justify-center">
          <ProgressCircle value={72} size="lg" />
        </div>
      </div>
    </div>
  );
}
