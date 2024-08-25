import useStore from "../store/Store";

type Props = {
  reservation: {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    event: string;
  };
};

function ReservationCart({ reservation }: Props) {
  const { removeReservation } = useStore();
  return (
    <div className="bg-slate-200 p-3">
      <h1>
        <span className="font-bold">Event: </span>
        {reservation.event}
      </h1>
      <p>
        <span className="font-bold"> Name: </span>
        {reservation.name}
      </p>
      <table>
        <tr>
          <th>Contact:</th>
          <td>{reservation.email}</td>
        </tr>
        <tr>
          <td></td>
          <td>{reservation.phone}</td>
        </tr>
      </table>
      <h1>
        <span className="font-bold">Date: </span>
        {reservation.date}
      </h1>
      <button
        onClick={() => removeReservation(reservation.id)}
        className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 text-sm rounded-sm"
      >
        Remove
      </button>
    </div>
  );
}

export default ReservationCart;
