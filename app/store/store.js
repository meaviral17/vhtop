import {create} from 'zustand';

// Define the initial user object with default values
const initialUser = {
  email: '',
  name: '',
  regNo: '',
  roomNo: '',
  block: '',
  mess: '',
  contact: '',
};

const useUserStore = create((set) => ({
  user: initialUser,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
