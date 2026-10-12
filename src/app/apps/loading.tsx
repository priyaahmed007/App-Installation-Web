const Loading = () => {
  return (
    <>
      {/* Heading Skeleton */}
      <div className="space-y-4 max-w-[400px] mx-auto text-center my-10 animate-pulse">
        <div className="h-10 w-40 bg-gray-200 rounded mx-auto"></div>

        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto"></div>
      </div>

      {/* App Cards Skeleton */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 container mx-auto my-10 px-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-pulse"
          >
            {/* Top Section */}
            <div className="flex gap-4">
              {/* App Image */}
              <div className="h-20 w-20 shrink-0 rounded-2xl bg-gray-200"></div>

              {/* App Info */}
              <div className="min-w-0 flex-1">
                {/* Title */}
                <div className="h-6 w-3/4 rounded bg-gray-200"></div>

                {/* Company */}
                <div className="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>

                {/* Rating */}
                <div className="mt-3 flex gap-2">
                  <div className="h-4 w-8 rounded bg-gray-200"></div>
                  <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                  <div className="h-4 w-10 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 space-y-2">
              <div className="h-4 w-full rounded bg-gray-200"></div>
              <div className="h-4 w-5/6 rounded bg-gray-200"></div>
            </div>

            {/* App Stats */}
            <div className="mt-5 grid grid-cols-3 divide-x rounded-xl bg-gray-50 py-3">
              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-12 rounded bg-gray-200"></div>
                <div className="h-3 w-16 rounded bg-gray-200"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-12 rounded bg-gray-200"></div>
                <div className="h-3 w-8 rounded bg-gray-200"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-12 rounded bg-gray-200"></div>
                <div className="h-3 w-12 rounded bg-gray-200"></div>
              </div>
            </div>

            {/* View Details Button */}
            <div className="mt-5 h-12 w-full rounded-xl bg-gray-200"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loading;