export default function TourList({ tours }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tours.map((tour, index) => (
        <div key={index} className="border rounded-lg shadow-lg p-4 relative flex flex-col h-full">
          {/* Tur Resmi */}
          <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover rounded-md" />

          {/* Tur Başlığı ve Açıklama */}
          <h3 className="text-lg font-bold mt-2">{tour.title}</h3>
          <p className="text-sm text-gray-600 flex-grow">{tour.description}</p>

          {/* Fiyat ve "Book Now" Butonu */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-primary-500 font-semibold">${tour.price}</span>
            <button className="bg-[#E07516] text-white px-4 py-2 rounded-lg font-bold">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
