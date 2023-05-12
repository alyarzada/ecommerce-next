import { create } from "zustand";
import toast from "react-hot-toast";

const useStore = create((set) => ({
  filters: {},
  sortValue: "",
  laptopsCount: 0,
  searchKey: "",
  card: [],
  setFilters: (payload) => set({ filters: payload }),
  setSortValue: (payload) => set({ sortValue: payload }),
  getLaptopsCount: (payload) => set({ laptopsCount: payload }),
  getSearchKey: (payload) => set({ searchKey: payload }),
  addToCard: (payload) =>
    set((state) => ({
      card: [payload, ...state.card],
    })),
  deleteFromCard: (id) => {
    set((state) => ({
      card: state.card.filter((item) => item.id !== id),
    }));
    toast.success("Item deleted successfully");
  },
  increaseItemCount: (id) => {
    set((state) => ({
      card: state.card.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      }),
    }));
  },
  decreaseItemCount: (id) => {
    set((state) => ({
      card: state.card.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      }),
    }));
  },
}));

export default useStore;
