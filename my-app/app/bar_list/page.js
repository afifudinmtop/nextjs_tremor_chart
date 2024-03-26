"use client";
import { BarList } from "@tremor/react";

const datahero = [
  { name: "/home", value: 456 },
  { name: "/imprint", value: 351 },
  { name: "/cancellation", value: 51 },
];

export default function BarListHero() {
  return (
    <div className="w-[600px] mx-auto mt-5 border rounded p-5">
      <BarList data={datahero} className="mx-auto max-w-sm" />
    </div>
  );
}
