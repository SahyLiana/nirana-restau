import { motion } from "framer-motion";
import "./reserver.css";
import { useState } from "react";
import useStore from "../store/Store";

type Props = {
  setIsActive: (page: string) => void;
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  date: string;
  event: string;
};

function Reserve({ setIsActive }: Props) {
  const options = ["Birthday", "Wedding", "Meeting", "Graduation"];

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    date: "",
    event: "",
  });

  const { addReservation } = useStore();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Form")?;
    console.log("Form", formData);
    addReservation(formData);
    setFormData({ name: "", email: "", phone: "", date: "", event: "" });
  };

  return (
    <motion.section
      id="Reserve"
      // onViewportEnter={() => setIsActive("Reserve")}
      className="bg-reserve h-[80vh] py-20"
    >
      <motion.div
        onViewportEnter={() => setIsActive("Reserve")}
        className="max-w-[75%] mx-auto flex gap-10 items-center justify-center h-full"
      >
        {/**LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-white basis-[48%] "
        >
          <h1 className="text-4xl font-bold mb-5">
            Reserve Your Seats to Confirm if You Come with Your Family
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum
            et ex consectetur aperiam quaerat delectus cupiditate voluptates sed
            obcaecati temporibus, quos, officia magnam, odit quis aliquid
            repellendus saepe. Reiciendis?
          </p>
        </motion.div>
        {/**FORM SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="bg-white p-10 basis-[48%] h-full flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className=" flex flex-col gap-10 ">
            <input
              type="text"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Enter name"
              className="border-2 p-1 rounded-md"
              name="name"
            />
            <input
              type="email"
              onChange={handleChange}
              required
              value={formData.email}
              placeholder="Enter email"
              className="border-2 p-1 rounded-md"
              name="email"
            />
            <input
              type="text"
              onChange={handleChange}
              required
              value={formData.phone}
              placeholder="Enter phone number"
              className="border-2 p-1 rounded-md"
              name="phone"
            />
            <input
              type="date"
              onChange={handleChange}
              // value={new Date().toJSON().slice(0, 10)}
              className="border-2 p-1 rounded-md"
              name="date"
            />
            <select
              required
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="p-2"
            >
              <option>Please choose your option</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="bg-red-600 w-fit mx-auto text-white py-2 px-6 font-semibold hover:shadow-2xl hover:shadow-red-600 duration-300 transition">
              Make Reservation
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Reserve;
