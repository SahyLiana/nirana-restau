import { motion } from "framer-motion";
import Header from "./Header";
import RiceBrochette from "../assets/rice-brochette.png";
import ChickenRice from "../assets/chicken-rice.png";
import Steak from "../assets/steak.png";
import BlogItem from "./BlogItem";
type Props = {
  setIsActive: (page: string) => void;
};

const BlogItems = [
  {
    image: RiceBrochette,
    date: " 22 Aug 2024",
    title: "Making tender BBQ beef seasoned with cheese served with rice",
    description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
  },
  {
    image: ChickenRice,
    date: " 09 Sept 2024",
    title: "Secret of making KFC Chicken",
    description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
  },
  {
    image: Steak,
    date: " 04 Oct 2024",
    title: "Peppered beaf steak ",
    description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
  },
];

function Blog({ setIsActive }: Props) {
  const displayBlog = BlogItems.map((blog) => (
    <BlogItem blog={blog} key={blog.title} />
  ));
  return (
    <section id="Blog">
      <motion.div
        className="my-16 max-w-[75%] mx-auto"
        onViewportEnter={() => setIsActive("Blog")}
      >
        <Header>
          <h1 className="text-5xl font-bold mb-6">Latest From Our Blog</h1>
          <p className="text-lg text-center text-slate-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          </p>
        </Header>

        <div className="flex flex-wrap mt-5 flex-row gap-10  w-full">
          {displayBlog}
        </div>
      </motion.div>
    </section>
  );
}

export default Blog;
