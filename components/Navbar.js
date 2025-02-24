import { FaBars, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function Navbar({ onOpenFilter }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-primary-600">
          Traveller's Market
        </span>
      </div>

      <div className="hidden md:block"></div>
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full m-auto"
      />
      <div className="flex gap-6 items-center p-4">
        <FaHeart className="text-primary-500 cursor-pointer" />
        <FaShoppingCart className="text-primary-500 cursor-pointer" />
        <FaUser className="text-primary-500 cursor-pointer" />
      </div>

      <button onClick={onOpenFilter} className="md:hidden text-primary-600">
        <FaBars size={28} />
      </button>
    </nav>
  );
}
