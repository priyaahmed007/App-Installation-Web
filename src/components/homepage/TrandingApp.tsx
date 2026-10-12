import type { TApp } from "@/types/apps.types";
import AppCard from "../Cards/AppCard";
import getData from "@/lib/appDataFetch";

// const getData = async () => {
//  const res = await fetch("http://localhost:3000/data.json");
//   const data = await res.json();
//   return data;
// }

const TrandingApp = async () => {
  const data = await getData();

  return (
    <>
      <div className="space-y-4 max-w-[400px] mx-auto text-center my-10">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p>
          Explore all trending apps on the market developed by top developers.
        </p>
      </div>

      {/* Data display via card */}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 container mx-auto my-10">
        {data.slice(0, 8).map((app: TApp, idx: number) => {
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

export default TrandingApp;
