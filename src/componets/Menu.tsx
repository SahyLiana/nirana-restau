import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useStore from "../store/Store";
import MenuItem from "./MenuItem";
import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
type Props = {
  setIsActive: (page: string) => void;
};

type MenuEltTypes = {
  name: string;
  category: string;
  description: string;
  price: number;
};

function Menu({ setIsActive }: Props) {
  const btnElmts = [
    "All Menu",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Budget Meal",
    "Buffet",
  ];

  const [category, setCategory] = useState<string>("All Menu");

  // console.log(category);

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

  // console.log("menu:", menus);

  const displayMenuItem = menus.map((item) => (
    <MenuItem item={item} key={item.name} />
  ));
  // const container = {
  //   hidden: {},
  //   visible: {
  //     transition: { staggerChildren: 0.2 },
  //   },
  // };

  return (
    <section id="Menu" className="min-h-screen py-24 bg-slate-100">
      <motion.div
        // onViewportEnter={() => setIsActive("Menu")}
        className="my-16 max-w-[75%] mx-auto"
      >
        <Header>
          <h1 className="text-5xl font-bold mb-6">
            What kind of Foods we serve for you
          </h1>
          <p className="text-lg text-slate-500">
            Who are in extremely love with eco friendly system
          </p>
        </Header>

        <motion.div onViewportEnter={() => setIsActive("Menu")}>
          <ButtonGroup
            btnElmts={btnElmts}
            setCategory={setCategory}
            category={category}
          />
        </motion.div>

        {/**DISPLAY MENUS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          // variants={container}
          className="flex flex-wrap flex-row gap-3 w-full"
        >
          {displayMenuItem}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Menu;
