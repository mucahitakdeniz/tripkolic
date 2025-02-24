import { FaTimes } from "react-icons/fa";

export default function FilterPanel({
  filters,
  setFilters,
  applyFilters,
  resetFilters,
  closeFilter,
}) {
  const themes = ["Island Tour", "Land Tour", "Safari"];
  const activities = ["Swimming", "Running", "Elephant Care", "Snorkeling"];
  const vehicles = [
    "Yacht",
    "Speedboat",
    "Safari",
    "Catamaran",
    "Speedcatamaran",
  ];
  const features = ["Transfer", "Halal Food", "Vegetarian Food"];

  
  return (
<div className="p-6 bg-slate-200 rounded-lg relative z-50 md:z-auto">
<button
        className="absolute top-4 right-4 text-gray-600 text-2xl md:hidden"
        onClick={closeFilter}
      >
        <FaTimes />
      </button>

      <h2 className="text-primary-600 text-xl font-semibold">Filters</h2>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Search location..."
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">Theme</label>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() =>
                setFilters({
                  ...filters,
                  theme: filters.theme === theme ? "" : theme,
                })
              }
              className={`px-4 py-2 rounded-lg ${
                filters.theme === theme
                  ? "bg-[#E07516] text-white"
                  : "bg-primary-400 text-black"
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">Activities</label>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => (
            <button
              key={activity}
              onClick={() =>
                setFilters({
                  ...filters,
                  activities: filters.activities.includes(activity)
                    ? filters.activities.filter((a) => a !== activity)
                    : [...filters.activities, activity],
                })
              }
              className={`px-4 py-2 rounded-lg ${
                filters.activities.includes(activity)
                  ? "bg-[#E07516] text-white"
                  : "bg-primary-400 text-black"
              }`}
            >
              {activity}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">
          Price Range: ${filters.price[0]} - ${filters.price[1]}
        </label>
        <input
          type="range"
          min="0"
          max="23000"
          value={filters.price[1]}
          onChange={(e) =>
            setFilters({ ...filters, price: [0, Number(e.target.value)] })
          }
          className="w-full appearance-none bg-gray-300 rounded-lg h-2"
          style={{
            background: `linear-gradient(to right, #F2A945 0%, #F2A945 ${
              (filters.price[1] / 23000) * 100
            }%, #D1D5DB ${(filters.price[1] / 23000) * 100}%, #D1D5DB 100%)`,
          }}
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">
          Start Time: {filters.start_time[0]}:00 - {filters.start_time[1]}:00
        </label>
        <input
          type="range"
          min="0"
          max="24"
          value={filters.start_time[1]}
          onChange={(e) =>
            setFilters({ ...filters, start_time: [0, Number(e.target.value)] })
          }
          className="w-full appearance-none bg-gray-300 rounded-lg h-2"
          style={{
            background: `linear-gradient(to right, #F2A945 0%, #F2A945 ${
              (filters.start_time[1] / 24) * 100
            }%, #D1D5DB ${(filters.start_time[1] / 24) * 100}%, #D1D5DB 100%)`,
          }}
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">
          Group Size: {filters.group_size[0]} - {filters.group_size[1]}
        </label>
        <input
          type="range"
          min="0"
          max="80"
          value={filters.group_size[1]}
          onChange={(e) =>
            setFilters({ ...filters, group_size: [0, Number(e.target.value)] })
          }
          className="w-full appearance-none bg-gray-300 rounded-lg h-2"
          style={{
            background: `linear-gradient(to right, #F2A945 0%, #F2A945 ${
              (filters.group_size[1] / 80) * 100
            }%, #D1D5DB ${(filters.group_size[1] / 80) * 100}%, #D1D5DB 100%)`,
          }}
        />
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #f2a945;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #f2a945;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">Vehicle</label>
        <div className="flex flex-wrap gap-2">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle}
              onClick={() =>
                setFilters({
                  ...filters,
                  vehicle: filters.vehicle === vehicle ? "" : vehicle,
                })
              }
              className={`px-4 py-2 rounded-lg ${
                filters.vehicle === vehicle
                  ? "bg-[#F2A945] text-white"
                  : "bg-primary-400 text-black"
              }`}
            >
              {vehicle}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-gray-600 mb-2">Features</label>
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <button
              key={feature}
              onClick={() =>
                setFilters({
                  ...filters,
                  features: filters.features.includes(feature)
                    ? filters.features.filter((f) => f !== feature)
                    : [...filters.features, feature],
                })
              }
              className={`px-4 py-2 rounded-lg ${
                filters.features.includes(feature)
                  ? "bg-[#F2A945] text-white"
                  : "bg-primary-400 text-black"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={resetFilters}
          className="bg-[#E07516] text-white px-6 py-3 rounded-lg font-bold"
        >
          RESET
        </button>
        <button
          onClick={applyFilters}
          className="bg-[#E07516] text-white px-6 py-3 rounded-lg font-bold"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}
