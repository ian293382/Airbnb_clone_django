// zustand 是一個非常輕量級的狀態管理庫 e.g : Redux
import  { create } from 'zustand';

interface AddPropertyModelStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useAddPropertyModel= create<AddPropertyModelStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false})
 }));

 export default useAddPropertyModel;