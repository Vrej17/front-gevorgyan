import Close from "../../icons/Close";
import Logo from "../../icons/Logo";
import Menu from "../Menu/Menu";
import "./SidebarMenu.css";

export default function SideBarMenu({ isOpenSidebar, setIsOpenSidebar }) {
  return (
    <>
      <div className={`sidebar-container ${isOpenSidebar ? "open" : ""}`}>
        <div className="sidebar-top">
          <a href="#top">
            <Logo />
          </a>
          <button
            className="sidebar-close"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <Close />
          </button>
        </div>
        <div className="sidebar-menu">
          <Menu isOpenSidebar={isOpenSidebar}/>
        </div>
      </div>
      <div
        onClick={() => setIsOpenSidebar(false)}
        className={`sidebar-background ${isOpenSidebar ? "show" : ""}`}
      ></div>
    </>
  );
}
