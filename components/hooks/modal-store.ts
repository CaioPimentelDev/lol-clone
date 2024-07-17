import { create } from "zustand";

export type ModalType = "chest" | "champion" | "skin";

interface DataType {
  name?: string,
  image?: string,
  id?: string
}
interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data?: DataType;
  onOpen: (type: ModalType, data?: DataType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}));
