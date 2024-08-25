import { create } from "zustand";
import Breakfast1 from "../assets/breakfast1.png";
import Breakfast2 from "../assets/breadfast2.png";
import Budget1 from "../assets/budgetmeal.png";
import Budget2 from "../assets/budgetmeal2.png";
import Buffet1 from "../assets/buffet1.png";
import Buffet2 from "../assets/buffet2.png";
import Dinner1 from "../assets/dinner.png";
import Dinner2 from "../assets/dinner2.png";
import Lunch from "../assets/lunch.png";

type MenuEltTypes = {
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

type CartTypes = {
  name: string;
  price: number;
  quantity: number;
};

type Reservation = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  event: string;
};

type State = {
  menus: Array<MenuEltTypes>;
  menuCategory: Array<MenuEltTypes>;
  reservations: Array<Reservation>;
  carts: Array<CartTypes>;
  totalPrice: number;
};

type Actions = {
  getAllElements: () => MenuEltTypes[];
  getElementsByCategory: (category: string) => MenuEltTypes[];
  addReservation: (reservation: Omit<Reservation, "id">) => void;
  removeReservation: (id: string) => void;
  addToCart: (cart: Omit<CartTypes, "quantity">) => void;
  removeCart: (name: string) => void;
};

const useStore = create<State & Actions>((set, get) => ({
  carts: [],
  reservations: [],
  totalPrice: 0,
  addToCart: (cart: Omit<CartTypes, "quantity">) => {
    if (get().carts.length === 0) {
      set((state) => ({
        ...state,
        carts: [...state.carts, { ...cart, quantity: 1 }],
      }));
    } else {
      if (get().carts.find((item) => item.name === cart.name)) {
        set((state) => ({
          ...state,
          carts: get().carts.map((item) =>
            item.name === cart.name
              ? { ...cart, quantity: item.quantity + 1 }
              : item
          ),
        }));
      } else {
        set((state) => ({
          ...state,
          carts: [...state.carts, { ...cart, quantity: 1 }],
        }));
      }
    }
    set((state) => ({
      ...state,
      totalPrice: get().carts.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0),
    }));
  },

  removeCart: (name: string) => {
    set((state) => ({
      ...state,
      carts: state.carts.filter((item) => item.name !== name),
    }));
    set((state) => ({
      ...state,
      totalPrice: state.carts.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0),
    }));
  },

  addReservation: (reservation: Omit<Reservation, "id">) => {
    set((state) => ({
      ...state,
      reservations: [
        ...state.reservations,
        { id: `${Math.random() * 100}`, ...reservation },
      ],
    }));
  },

  removeReservation: (id: string) => {
    set((state) => ({
      ...state,
      reservations: state.reservations.filter((item) => item.id !== id),
    }));
  },
  menus: [
    {
      name: "British Sausage Combo",
      category: "Breakfast",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Breakfast1,
      price: 44,
    },
    {
      name: "French croissant",
      category: "Breakfast",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Breakfast2,
      price: 20,
    },
    {
      name: "Turkish Shawarma",
      category: "Budget Meal",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Budget1,
      price: 23,
    },
    {
      name: "American Burger",
      category: "Budget Meal",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Budget2,
      price: 25,
    },
    {
      name: "Charcuterie Buffet",
      category: "Buffet",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Buffet1,
      price: 280,
    },
    {
      name: "Vegetarian Buffet",
      category: "Buffet",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Buffet2,
      price: 44,
    },
    {
      name: "Family Dinner",
      category: "Dinner",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Dinner1,
      price: 180,
    },
    {
      name: "Couple Dinner",
      category: "Dinner",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Dinner2,
      price: 99,
    },
    {
      name: "Tender Chicken",
      category: "Lunch",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      image: Lunch,
      price: 32,
    },
  ],
  menuCategory: [],
  getAllElements: () => {
    set((state) => ({ ...state, menus: state.menus }));
    return get().menus;
  },
  getElementsByCategory: (category: string) => {
    set((state) => ({
      ...state,
      menuCategory: get().menus.filter((item) => item.category === category),
    }));

    return get().menuCategory;
  },
}));

export default useStore;
