import { motion } from "framer-motion";
// type Props = {
//   setIsActive: (page: string) => void;
// };

function Contact() {
  return (
    <motion.section className=" bg-red-600 py-16  mt-8">
      <motion.div
        // onViewportEnter={() => setIsActive("Contact")}
        className="my-16 max-w-[75%] mx-auto flex gap-4 text-white"
      >
        {/**LEFT */}
        <div className="basis-[30%]">
          <h1 className="text-2xl font-semibold mb-3">Opening Hours</h1>
          <table className="w-full">
            <tr className="border-b-[1px] border-slate-300">
              <td className="py-2">Monday-Friday</td>
              <td>08.00 am - 10.00 pm</td>
            </tr>
            <tr className="border-b-[1px] border-slate-300">
              <td className="py-2">Saturday</td>
              <td>09.00 am - 6.00 pm</td>
            </tr>
            <tr className="border-b-[1px] border-slate-300">
              <td className="py-2">Monda-Friday</td>
              <td>09.00 am - 6.00 pm</td>
            </tr>
          </table>
        </div>

        {/**MIDDLE */}
        <div>
          <h1 className="text-2xl font-semibold mb-5">Contact Us</h1>
          <p>
            56/8, los angeles, rochy beach, Santa monica, United states of
            america - 1205
          </p>
          <h2 className="text-xl font-semibold mt-2">012-6532-568-9746</h2>
          <h2 className="text-xl font-semibold">012-6532-569-9748</h2>
        </div>

        {/**RIGHT */}
        <div>
          <h1 className="text-2xl font-semibold mb-5">Newsletter</h1>
          <p>You can trust us. we only send promo offers, not a single spam.</p>
          <h2>asdfasdf@gmail.com</h2>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
