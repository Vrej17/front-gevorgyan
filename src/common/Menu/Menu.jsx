import MenuArrow from "../../icons/MenuArrow";
import { menu } from "../../constants/menu";
import "./Menu.css";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function Menu({ isOpenSidebar, headerExpanded = null }) {
  const [hoverOpenIndex, setHoverOpenIndex] = useState(null);
  const [clickOpenIndex, setClickOpenIndex] = useState(null);
  const [openedByClick, setOpenedByClick] = useState(false);

  const _ = useDebounce(hoverOpenIndex, 300);

  const isOpenMenuItem = (idx) => {
    if (clickOpenIndex === idx) return true;
    if (!openedByClick && hoverOpenIndex === idx) return true;
    return false;
  };

useEffect(()=>{
  if(headerExpanded){
    if(hoverOpenIndex || clickOpenIndex){
      setHoverOpenIndex(null)
      setOpenedByClick(false)
      setClickOpenIndex(null)
    }
  }
},[headerExpanded,clickOpenIndex,hoverOpenIndex])

  useEffect(() => {
    if (!isOpenSidebar) {
      setHoverOpenIndex(null);
      setClickOpenIndex(null);
    }
  }, [isOpenSidebar]);

  const clickOpen = (idx) => {
    if (clickOpenIndex === idx) {
      setClickOpenIndex(null);
      setOpenedByClick(false);
    } else {
      setClickOpenIndex(idx);
      setHoverOpenIndex(null);
      setOpenedByClick(true);
    }
  };
  return (
    <nav className="menu-container">
      {menu.map((navItem, idx) => {
        const isOpen = isOpenMenuItem(idx);
        return (
          <span
            key={idx}
            onMouseEnter={() => !openedByClick && setHoverOpenIndex(idx)}
            onMouseLeave={() => !openedByClick && setHoverOpenIndex(null)}
            onClick={() => clickOpen(idx)}
          >
            {navItem}
            <span className={`menu-arrow ${isOpen ? "open" : ""}`}>
              <MenuArrow />
            </span>

            <ul className={`menu-dropdown-list ${isOpen ? "open" : ""}`}>
              {Array(5)
                .fill(1)
                .map((_, subIdx) => (
                  <li key={subIdx}>
                    {navItem}
                    <span className="menu-dropdown-arrow">
                      <MenuArrow />
                    </span>
                  </li>
                ))}
            </ul>
          </span>
        );
      })}

      <span>Buy Now</span>
    </nav>
  );
}
