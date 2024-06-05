import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAllContexts } from "../../context";
import Actor from "../../assets/actor.png";
import Profile from "../../assets/logo.svg";
import Menu from "./Menu";
import { MenuButtonIcon, MenuIcon } from "../../assets/Icons";

function useHeader() {
  const navigate = useNavigate();
  const { user } = useAllContexts();
  const token = localStorage.getItem("token");
  const [isToken, setIsToken] = useState(!!token);
  const [miniMenu, setMiniMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(user.image || Actor);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    setIsOpen(false);
    navigate("/");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    setIsToken(token);
  }, [token]);

  return {
    isToken,
    miniMenu,
    setMiniMenu,
    isOpen,
    setIsOpen,
    selectedImage,
    handleImageChange,
    handleLogout,
    Link,
    Profile,
    Menu,
    MenuButtonIcon,
    MenuIcon,
    user,
  };
}

export default useHeader;
