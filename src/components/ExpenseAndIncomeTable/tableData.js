import id from "bson-objectid";

export const data = [
  {
    id: id(),
    date: "01.01.2001",
    description: "Teachers",
    category: "drinks",
    sum: "600",
  },
  {
    id: id(),
    date: "11.01.2011",
    description: "Steak ribeye",
    category: "food",
    sum: "450",
  },
  {
    id: id(),
    date: "21.01.2021",
    description: "Salmon",
    category: "food",
    sum: "300",
  },
];
