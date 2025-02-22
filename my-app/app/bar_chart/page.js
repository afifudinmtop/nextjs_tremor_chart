"use client";

import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
];

export default function BarChartHero() {
  const dataFormatter = (number) =>
    Intl.NumberFormat("us").format(number).toString();

  return (
    <div className="w-[600px] mx-auto mt-5 border rounded p-5">
      <BarChart
        data={chartdata}
        index="name"
        categories={["Number of threatened species"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
