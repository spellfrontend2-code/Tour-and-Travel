function Timeline({ itinerary }) {
  return (
    <div className="relative m-3">
      {/* Vertical line */}
      <div className="absolute left-3 top-0 h-full border-l-2  border-gray-300" />

      {itinerary.map((i) => (
        <div key={i.id} className="relative mb-1 flex items-start ">
          {/* Dot */}
          <div className="relative mt-4 h-8 w-8 rounded-xl bg-white shadow-md shadow-gray-300">
            <div className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
              D{i.day}
            </div>
          </div>

          {/* Card */}
          <div className="ml-1 flex-1 rounded-2xl p-3">
            <h3 className="font-semibold">
              Day {i.day}: {i.title}
            </h3>

            <p className="text-sm text-gray-600">{i.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
