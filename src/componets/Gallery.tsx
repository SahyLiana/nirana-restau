import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useStore from "../store/Store";
import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
type Props = {
  setIsActive: (page: string) => void;
};

type MenuEltTypes = {
  // name: string;
  // category: string;
  // description: string;
  // price: number;
  image: string;
};

function Gallery({ setIsActive }: Props) {
  const btnElmts = [
    "All Menu",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Budget Meal",
    "Buffet",
  ];

  const [category, setCategory] = useState<string>("All Menu");

  const { getAllElements, getElementsByCategory } = useStore();

  const [menus, setMenus] = useState<MenuEltTypes[]>([]);

  useEffect(() => {
    if (category === "All Menu" || category === "") {
      // console.log(category);
      setMenus(getAllElements());
    } else {
      setMenus(getElementsByCategory(category));
    }
  }, [category]);

  const displayGalleryItem = menus.map((item) => (
    <img
      key={item.image}
      className={` h-64 w-[30%] rounded-md`}
      src={item.image}
    />
  ));
  return (
    <section id="Gallery" className="min-h-screen py-24 bg-slate-100">
      <motion.div
        onViewportEnter={() => setIsActive("Gallery")}
        className="my-16 max-w-[75%] mx-auto"
      >
        {/**HEADER */}
        <Header>
          <h1 className="text-5xl font-bold mb-6">Food and Customer Gallery</h1>
          <p className="text-lg text-slate-500">
            Who are in extremely love with eco friendly system
          </p>
        </Header>
        {/**BUTTON GROUP */}
        <ButtonGroup
          btnElmts={btnElmts}
          setCategory={setCategory}
          category={category}
        />

        {/**DISPLAY GALLERY */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex items-stretch flex-wrap flex-row gap-10 w-full"
        >
          {displayGalleryItem}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Gallery;
