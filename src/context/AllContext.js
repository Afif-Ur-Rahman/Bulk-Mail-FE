import { createContext, useContext } from "react";

export const AllContexts = createContext({
  user: { _id: "", name: "", email: "", image: "" },
});

export const useAllContexts = () => {
  return useContext(AllContexts);
};

export const AllContextsProvider = AllContexts.Provider;
