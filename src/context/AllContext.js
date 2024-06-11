import { createContext, useContext } from "react";

export const AllContexts = createContext({
  user: { _id: "", name: "", email: "", image: "" },
  data: [],
  signupForm: { name: "", email: "", password: "" },
  loginForm: { email: "", password: "" },
  addDataForm: {
    "First Name": "",
    "Last Name": "",
    "Job Title": "",
    Company: "",
    Email: "",
    "Company Phone": "",
    Industry: "",
    City: "",
    Country: "",
    Status: "",
  },
  pages: {
    page: 1,
    totalPages: 1,
  },
  errors: {
    name: "",
    email: "",
    password: "",
    file: "",
  },
  searchData: "",
  form: false,
  editData: false,
  checkedItems: [],
  newId: null,
});

export const useAllContexts = () => {
  return useContext(AllContexts);
};

export const AllContextsProvider = AllContexts.Provider;
