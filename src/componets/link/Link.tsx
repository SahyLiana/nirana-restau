import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  isActive: string;
  setIsActive: (page: string) => void;
};

function Link({ page, isActive, setIsActive }: Props) {
  return (
    <AnchorLink
      href={`#${page}`}
      onClick={() => setIsActive(page)}
      className={` ${isActive === page ? "underline text-red-500 scale-110" : "text-white"} text-lg hover:scale-110 hover:text-red-700 transition duration-300 font-bold`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
