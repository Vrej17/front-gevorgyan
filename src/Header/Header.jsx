import { useRef, useState } from "react";
import Menu from "../common/Menu/Menu";
import Search from "../common/Search/Search";
import BurgerMenu from "../icons/BurgerMenu";
import Logo from "../icons/Logo";
import "./Header.css";
import SideBarMenu from "../common/Sidebar/SidebarMenu";
import useHeaderSlide from "../hooks/useHeaderSlide";

export default function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const headerRef = useRef(null);

  const { headerExpanded } = useHeaderSlide(headerRef);

  return (
    <>
      <header ref={headerRef}>
        <div className="header-container">
          <button
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            className="burger-menu"
          >
            <BurgerMenu />
          </button>
          <span className="logo-container">
            <a href="#top">
              <Logo />
            </a>
          </span>
          <Search />
        </div>
        <div className="header-menu-container">
          <Menu headerExpanded={headerExpanded} />
        </div>
      </header>
      <SideBarMenu
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    </>
  );
}
