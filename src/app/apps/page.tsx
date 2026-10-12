import AppCard from "@/components/Cards/AppCard";
import getData from "@/lib/appDataFetch";
import type { TApp } from "@/types/apps.types";
import React from "react";

const AllApps = async () => {
  //  const res = await fetch('http://localhost:3000/data.json')
  //  const data = await res.json();

  const data = await getData();

  return (
    <>
      <div className="space-y-4 max-w-[400px] mx-auto text-center my-10">
        <h2 className="font-bold text-4xl">All Apps</h2>
        <p>
          Explore all trending apps on the market developed by top developers.
        </p>
      </div>

      {/* Data display via card */}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 container mx-auto my-10">
        {data.map((app: TApp, idx: number) => {
          return (
            <AppCard key={idx} app={app} />
            // <div key={idx}>
            //      <h3>{app.title}</h3>
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default AllApps;
