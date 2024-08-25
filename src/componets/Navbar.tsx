import { useState } from "react";
import Link from "./link/Link";
import ReservationCanvas from "./ReservationCanvas";
import useStore from "../store/Store";
import CartCanvas from "./CartCanvas";

type Props = {
  isActive: string;
  setIsActive: (page: string) => void;
  isFixed: boolean;
};

function Navbar({ isFixed, isActive, setIsActive }: Props) {
  const pages = ["Home", "About", "Menu", "Reserve", "Gallery", "Blog"];

  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { reservations, carts } = useStore();

  return (
    <nav
      className={`bg-black h-32 transition-all duration-500 w-full z-20 py-5 ${isFixed ? "bg-opacity-80 sticky top-0 " : "bg-opacity-20 fixed "}`}
    >
      <div className="max-w-[75%] mx-auto flex justify-between items-center">
        <div className="text-white text-center border-2 p-2 rounded-lg ">
          <h1 className=" text-5xl">Nirana</h1>
          <p>Restaurant</p>
        </div>

        <div className="flex  w-1/2 justify-between">
          {pages.map((page) => (
            <Link
              page={page}
              isActive={isActive}
              setIsActive={setIsActive}
              key={page}
            />
          ))}
          <div className="relative">
            <button
              className=" bg-red-600 rounded-lg  text-white px-3 py-2 hover:bg-red-700 duration-300 transition-all"
              onClick={() => setIsReservationOpen(true)}
            >
              My reservation
            </button>
            <div className="absolute text-red-600 px-1 rounded-full text-sm top-[-20%] bg-white right-[-5%] z-20">
              {reservations.length}
            </div>
          </div>
          <div className="relative">
            <button
              className=" bg-red-600 rounded-lg  text-white px-3 py-2 hover:bg-red-700 duration-300 transition-all"
              onClick={() => setIsCartOpen(true)}
            >
              My Cart
            </button>
            <div className="absolute text-red-600 px-1 rounded-full text-sm top-[-20%] bg-white right-[-5%] z-20">
              {/* {reservations.length} */}
              {carts.length}
            </div>
          </div>

          {isCartOpen && <CartCanvas setIsCartOpen={setIsCartOpen} />}
          {isReservationOpen && (
            <ReservationCanvas setIsReservationOpen={setIsReservationOpen} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
