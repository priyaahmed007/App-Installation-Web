import getData from "@/lib/appDataFetch";
import type { TApp } from "@/types/apps.types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export type TAppDetailsProps = {
  params: {
    id: string;
  };
};

const AppDetails = async ({ params }: TAppDetailsProps) => {
  const { id } = await params;

  const allapps = await getData();

  const app = allapps.find((app: TApp) => app.id === Number(id));

  // App not found
  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">

        {/* Back Button */}
        <Link
          href="/apps"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-600"
        >
          ← Back to Apps
        </Link>

        {/* Main Details Card */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-10">

          {/* Header */}
          <div className="flex flex-col gap-7 md:flex-row md:items-center">

            {/* App Image */}
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border border-gray-200">
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            {/* App Info */}
            <div className="flex-1">

              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {app.title}
              </h1>

              <p className="mt-2 text-gray-500">
                Developed by{" "}
                <span className="font-semibold text-gray-700">
                  {app.companyName}
                </span>
              </p>

              {/* Rating Badge */}
              <div className="mt-5 flex items-center gap-3">

                <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-4 py-2">
                  <span className="text-lg text-yellow-500">
                    ★
                  </span>

                  <span className="text-base font-bold text-gray-900">
                    {app.ratingAvg}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {app.reviews} reviews
                </span>

              </div>
            </div>

            {/* Install Button */}
            <div>
              <button
                className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Install
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200" />

          {/* App Statistics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Downloads */}
            <div className="rounded-2xl bg-gray-50 p-5 text-center">
              <p className="text-2xl font-bold text-gray-900">
                {app.downloads}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Downloads
              </p>
            </div>

            {/* Size */}
            <div className="rounded-2xl bg-gray-50 p-5 text-center">
              <p className="text-2xl font-bold text-gray-900">
                {app.size} MB
              </p>

              <p className="mt-1 text-sm text-gray-500">
                App Size
              </p>
            </div>

            {/* Rating */}
            <div className="rounded-2xl bg-gray-50 p-5 text-center">
              <p className="text-2xl font-bold text-gray-900">
                {app.ratingAvg} ★
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Average Rating
              </p>
            </div>
          </div>

          {/* About App */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              About this app
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-gray-600">
              {app.description}
            </p>
          </div>

          {/* App Information */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              App Information
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              {/* Company */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">
                  Company
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {app.companyName}
                </p>
              </div>

              {/* Size */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">
                  Size
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {app.size} MB
                </p>
              </div>

              {/* Downloads */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">
                  Downloads
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {app.downloads}
                </p>
              </div>

              {/* Reviews */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">
                  Reviews
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {app.reviews}
                </p>
              </div>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
};

export default AppDetails;