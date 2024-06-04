import { useEffect, useState } from "react";
import Actor from "../../assets/actor.png";

function useHeader() {
  const token = localStorage.getItem("token");
  const [isToken, setIsToken] = useState(!!token);
  const [miniMenu, setMiniMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(Actor);

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
  };
}

export default useHeader;
