import { useState } from "react";
import Navbar from "../components/Navbar";
import FilterPanel from "../components/FilterPanel";
import TourList from "../components/TourList";
import tours from "../data/tours.json";

export default function Index() {
  const [filterOpen, setFilterOpen] = useState(false);

  const defaultFilters = {
    location: "",
    theme: "",
    activities: [],
    price: [0, 12500],
    start_time: [0, 12],
    group_size: [0, 40],
    vehicle: "",
    features: [],
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [filteredTours, setFilteredTours] = useState(tours);

  const applyFilters = () => {
  
    let newFilteredTours = [...tours];
  
    // **Lokasyon Filtreleme (Eğer boşsa filtreleme yapma)**
    if (filters.location.trim() !== "") {
      newFilteredTours = newFilteredTours.filter((tour) =>
        tour.location.toLowerCase().includes(filters.location.toLowerCase())
      );
      console.log("📍 Lokasyona Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    // **Tema Filtreleme (Eğer boşsa filtreleme yapma)**
    if (filters.theme !== "") {
      newFilteredTours = newFilteredTours.filter((tour) => tour.theme === filters.theme);
      console.log("🎭 Tema'ya Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    // **Aktiviteler Filtreleme (Eğer boşsa filtreleme yapma)**
    if (filters.activities.length > 0) {
      newFilteredTours = newFilteredTours.filter((tour) =>
        filters.activities.every((act) => tour.activities.includes(act))
      );
      console.log("🏊‍♂️ Aktivitelere Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    // **Fiyat Aralığı Filtreleme**
    if (filters.price[0] !== 0 || filters.price[1] !== 12500) {
      newFilteredTours = newFilteredTours.filter(
        (tour) => tour.price >= filters.price[0] && tour.price <= filters.price[1]
      );
      console.log("💰 Fiyata Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    // **Başlangıç Zamanı Filtreleme**
    if (filters.start_time[0] !== 0 || filters.start_time[1] !== 12) {
      newFilteredTours = newFilteredTours.filter(
        (tour) => tour.start_time >= filters.start_time[0] && tour.start_time <= filters.start_time[1]
      );
      console.log("⏰ Başlangıç Saatine Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    // **Grup Boyutu Filtreleme**
    if (filters.group_size[0] !== 0 || filters.group_size[1] !== 40) {
      newFilteredTours = newFilteredTours.filter(
        (tour) => tour.group_size >= filters.group_size[0] && tour.group_size <= filters.group_size[1]
      );
      console.log("👥 Grup Boyutuna Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    // **Araç Filtreleme (Eğer boşsa filtreleme yapma)**
    if (filters.vehicle !== "") {
      newFilteredTours = newFilteredTours.filter((tour) => tour.vehicle === filters.vehicle);
      console.log("🚗 Araca Göre Filtrelenen Veriler:", newFilteredTours);
    }
  
    if (filters.features.length > 0) {
      newFilteredTours = newFilteredTours.filter((tour) =>
        filters.features.every((feat) => tour.features.includes(feat))
      );
    }
  
    setFilteredTours(newFilteredTours);
    setFilterOpen(false); 
  };
  

  
  

  const resetFilters = () => {
    setFilters(defaultFilters);
    setFilteredTours(tours);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block w-1/4 p-4 bg-gray-100">
        <FilterPanel filters={filters} setFilters={setFilters} applyFilters={applyFilters} resetFilters={resetFilters} />
      </div>

      <div className="w-full md:w-3/4">
        <Navbar onOpenFilter={() => setFilterOpen(true)} />

        {filterOpen && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start md:hidden">
            <div className="bg-white p-6 w-full max-w-md rounded-lg shadow-lg">
              <FilterPanel filters={filters} setFilters={setFilters} applyFilters={applyFilters} resetFilters={resetFilters} closeFilter={() => setFilterOpen(false)} />
            </div>
          </div>
        )}

        <TourList tours={filteredTours} />
      </div>
    </div>
  );
}
