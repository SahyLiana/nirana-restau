import useStore from "../store/Store";
import ReservationCart from "./ReservationCart";

type Props = {
  //   isReservationOpen: boolean;
  setIsReservationOpen: (isOpen: boolean) => void;
};

function ReservationCanvas({ setIsReservationOpen }: Props) {
  const { reservations } = useStore();
  console.log("reservation", reservations);

  const displayReservations = reservations.map((reservation) => (
    <ReservationCart key={reservation.id} reservation={reservation} />
  ));
  return (
    <div className="fixed z-30 bg-white top-0 right-0 h-full w-[25vw] flex justify-center">
      <div className="b w-[85%]  h-[95%] my-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">My Reservation</h1>
          <button
            onClick={() => setIsReservationOpen(false)}
            className="text-5xl text-red-600"
          >
            x
          </button>
        </div>

        {/**CONTENT */}
        {reservations.length > 0 ? (
          <div className="flex flex-col gap-4 mt-6 overflow-y-auto max-h-[80%]">
            {displayReservations}
            <button className="bg-green-600 text-white py-2 font-semibold hover:bg-green-700 hover:rounded-lg transition-all duration-300">
              Confirm
            </button>
          </div>
        ) : (
          <h1 className="mt-6 text-center text-slate-400 text-4xl">
            No Reservation
          </h1>
        )}
      </div>
    </div>
  );
}

export default ReservationCanvas;
