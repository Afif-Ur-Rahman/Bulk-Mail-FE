import { useContext } from "react";
import { AllContexts, AllContextsProvider } from "./AllContext";

export const useAllContexts = () => {
  return useContext(AllContexts);
};

export { AllContextsProvider };
