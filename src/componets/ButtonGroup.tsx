type Props = {
  btnElmts: string[];
  setCategory: (category: string) => void;
  category: string;
};

function ButtonGroup({ btnElmts, setCategory, category }: Props) {
  return (
    <div className="flex rounded-xl overflow-hidden gap-[3px] shadow-xl w-full my-10">
      {btnElmts.map((btn) => (
        <button
          key={btn}
          className={`px-4 py-6  basis-1/6 ${btn === category ? " bg-red-600 text-white" : "bg-white text-black"}`}
          onClick={() => setCategory(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
