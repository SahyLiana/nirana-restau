import { motion } from "framer-motion";
import burger from "../assets/burger.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  setIsActive: (page: string) => void;
};

function About({ setIsActive }: Props) {
  return (
    <section id="About" className="h-screen py-24 bg-slate-100">
      <motion.div
        className="my-16 max-w-[75%] mx-auto flex gap-11 justify-between items-center"
        onViewportEnter={() => setIsActive("About")}
      >
        <motion.div
          className="basis-3/5"
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
          <h1 className="text-4xl mb-8 font-bold">About Our Story</h1>
          <p className="text-xl">
            Who are in extremely love with eco friendly system. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <AnchorLink
            href="#Menu"
            className="bg-red-600 text-white text-lg py-2 px-4 mt-10 block w-fit transition duration-300 hover:shadow-2xl hover:shadow-red-600  "
          >
            VIEW FULL MENU
          </AnchorLink>
        </motion.div>

        {/**IMAGE */}
        <motion.div
          className="basis-2/5 rounded-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 1,
          }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img alt="Burger" className="h-1/4" src={burger} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
