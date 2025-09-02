import { create } from "zustand";
import { Resource, Order } from "./types/types";

type Store = {
  resources: Resource[];
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrder: (order: Order) => void;
};

export const useStore = create<Store>((set) => ({
  resources: [
    { id: 1, name: "CNC Machine 1", status: "Available" },
    { id: 2, name: "Assembly Line A", status: "Available" },
    { id: 3, name: "Assembly Line B", status: "Available" }
  ],
  orders: [],
  addOrder: (order) =>
    set((state) => ({ orders: [...state.orders, order] })),
  updateOrder: (order) =>
    set((state) => ({
      orders: state.orders.map((o) => (o.id === order.id ? order : o)),
    })),
}));
