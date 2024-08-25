import AnchorLink from "react-anchor-link-smooth-scroll";
import "./home.css";
import { motion } from "framer-motion";
type Props = {
  setIsActive: (page: string) => void;
};

function Home({ setIsActive }: Props) {
  return (
    <section
      id="Home"
      className="background h-screen flex items-center justify-center"
    >
      <motion.div
        className="text-white  flex flex-col gap-6 text-center border-b-2 p-10"
        onViewportEnter={() => setIsActive("Home")}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 1,
        }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="welcome text-5xl">Welcome to</p>
        <h1 className="font-bold text-7xl">Nirana Restaurant</h1>
        <AnchorLink
          href="#Menu"
          className="bg-white text-red-600  w-1/4 text-lg py-2 rounded-lg transition duration-300 hover:text-white hover:bg-red-600 hover:font-bold mx-auto"
        >
          Look Menu
        </AnchorLink>
      </motion.div>
    </section>
  );
}

export default Home;
