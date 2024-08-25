import useStore from "../store/Store";

type Props = {
  item: {
    name: string;
    category: string;
    description: string;
    // image: string;
    price: number;
  };
};

function MenuItem({ item }: Props) {
  const { addToCart } = useStore();
  // const childVariant = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: { opacity: 1, scale: 1 },
  // };

  // console.log("Carts", carts);
  return (
    <div
      // transition={{ duration: 0.5 }}
      // viewport={{
      //   once: true,
      // }}
      // transition={{ duration: 0.5 }}
      // whileInView="visible"
      // variants={childVariant}
      className="basis-[48%] bg-white rounded-lg p-6"
    >
      {/**Header */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">{item.name}</h1>
        <p className="text-lg text-red-600 font-bold">$ {item.price}</p>
        {/* <img src={item.image} /> */}
      </div>

      {/**Description */}
      <p className="max-w-[80%]">{item.description}</p>
      <button
        onClick={() => addToCart({ name: item.name, price: item.price })}
        className="bg-red-600 text-white font-bold mt-2 py-1 px-3 hover:bg-red-700"
      >
        Add To Cart +
      </button>
    </div>
  );
}

export default MenuItem;
