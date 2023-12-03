import { createContext, useContext } from "react";
import { RootStore, store } from ".";

export const Context = createContext<RootStore>(store)

export const useStore = () => useContext(Context)