/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AllContexts = createContext();

export const AllContextsProvider = ({ children }) => {
  const [user, setUser] = useState({ _id: "", name: "", email: "", image: "" });
  const [data, setData] = useState([]);
  const [mailTemplatesData, setMailTemplatesData] = useState([]);
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [addDataForm, setAddDataForm] = useState({
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
  });
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    file: "",
  });
  const [searchData, setSearchData] = useState("");
  const [form, setForm] = useState(false);
  const [editData, setEditData] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [newId, setNewId] = useState(null);
  const [checkedEmails, setCheckedEmails] = useState([]);
  const [mailForm, setMailForm] = useState({
    to: [],
    subject: "",
    message: "",
  });
  const [userInfo, setUserInfo] = useState(false);
  const token = localStorage.getItem("token");
  const [mailTemplate, setMailTemplate] = useState({
    subject: "",
    message: "",
  });

  return (
    <AllContexts.Provider
      value={{
        user,
        setUser,
        data,
        setData,
        signupForm,
        setSignupForm,
        loginForm,
        setLoginForm,
        addDataForm,
        setAddDataForm,
        pages,
        setPages,
        errors,
        setErrors,
        searchData,
        setSearchData,
        form,
        setForm,
        editData,
        setEditData,
        checkedItems,
        setCheckedItems,
        newId,
        setNewId,
        checkedEmails,
        setCheckedEmails,
        mailForm,
        setMailForm,
        userInfo,
        setUserInfo,
        token,
        mailTemplate,
        setMailTemplate,
        mailTemplatesData,
        setMailTemplatesData,
      }}
    >
      {children}
    </AllContexts.Provider>
  );
};
