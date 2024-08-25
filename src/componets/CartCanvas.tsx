import React from "react";
import useStore from "../store/Store";
import CartItem from "./CartItem";

type Props = {
  setIsCartOpen: (open: boolean) => void;
};

function CartCanvas({ setIsCartOpen }: Props) {
  const { carts, totalPrice } = useStore();

  const displayCarts = carts.map((cart) => (
    <CartItem key={cart.name} cart={cart} />
  ));
  return (
    <div className="fixed z-30 bg-white top-0 right-0 h-full w-[25vw] flex justify-center">
      <div className="b w-[85%]  h-[95%] my-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">My Cart</h1>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-5xl text-red-600"
          >
            x
          </button>
        </div>

        {/**CONTENT */}

        {carts.length > 0 ? (
          <div className="flex flex-col gap-4 mt-6 overflow-y-auto max-h-[80%]">
            {displayCarts}
            <h1 className="text-2xl font-semibold">
              Total price: <span className="text-red-600">$ {totalPrice}</span>
            </h1>
            <button className="bg-green-600 text-white py-2 font-semibold hover:bg-green-700 hover:rounded-lg transition-all duration-300">
              Confirm
            </button>
          </div>
        ) : (
          <h1 className="mt-6 text-center text-slate-400 text-4xl">
            Empty Cart
          </h1>
        )}
      </div>
    </div>
  );
}

export default CartCanvas;
