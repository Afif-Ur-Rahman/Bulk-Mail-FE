import useHeader from "./useHeader";
import ProfileSideBar from "./ProfileSideBar";

function Header() {
  const {
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
    passChange,
    setPassChange,
  } = useHeader();

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative w-full z-10">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link to="/home">
          <img src={Profile} alt="logo" className="w-36" />
        </Link>

        {isToken && (
          <div
            id="collapseMenu"
            className={`lg:block max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
            style={{
              opacity: miniMenu ? 1 : 0,
              visibility: miniMenu ? "visible" : "hidden",
              transform: miniMenu ? "translateY(0)" : "translateY(-100%)",
              transition:
                "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
            }}
          >
            <button
              id="toggleClose"
              className={`lg:hidden fixed rounded-full bg-white p-3`}
              onClick={() => setMiniMenu(false)}
              style={{ top: "10px", right: "10px" }}
            >
              <MenuIcon />
            </button>

            <Menu />
          </div>
        )}

        {isToken && (
          <div className="flex max-lg:ml-auto space-x-3">
            <button
              id="toggleOpen"
              className="lg:hidden"
              onClick={() => setMiniMenu(true)}
            >
              <MenuButtonIcon />
            </button>

            <div
              className="user cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={user.image || selectedImage}
                alt="User Image"
                width={"50px"}
                height={"50px"}
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
          </div>
        )}
        {isOpen && (
          <ProfileSideBar
            handleImageChange={handleImageChange}
            handleLogout={handleLogout}
            setIsOpen={setIsOpen}
            selectedImage={user.image || selectedImage}
            Link={Link}
            passChange={passChange}
            setPassChange={setPassChange}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
