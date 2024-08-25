import "./blogitem.css";

type BlogType = {
  image: string;
  date: string;
  title: string;
  description: string;
};

type Props = {
  blog: BlogType;
};

function BlogItem({ blog }: Props) {
  return (
    <div className="w-[30%]  blog-cart cursor-pointer  overflow-hidden">
      <div className="overflow-hidden rounded-md">
        <img className="h-80 w-full" src={blog.image} />
      </div>

      <p className="my-3 bg-black text-white w-fit py-1 px-3">{blog.date}</p>
      <h1 className="text-lg font-semibold title-hover">{blog.title}</h1>
      <p className="text-slate-500">{blog.description}</p>
    </div>
  );
}

export default BlogItem;
