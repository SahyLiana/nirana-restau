import useStore from "../store/Store";

type Props = {
  cart: { name: string; price: number; quantity: number };
};

function CartItem({ cart }: Props) {
  const { removeCart } = useStore();
  return (
    <div className="bg-slate-200 p-3">
      <h1>
        <span className="font-bold">Name: </span>
        {cart.name}
      </h1>
      <p>
        <span className="font-bold"> Unit price: </span>$ {cart.price}
      </p>
      <p>
        <span className="font-bold"> Quantity: </span>x {cart.quantity}
      </p>

      <button
        onClick={() => removeCart(cart.name)}
        className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 text-sm rounded-sm"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
