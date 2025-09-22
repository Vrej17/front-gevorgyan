import { useEffect, useState } from "react";

export default function useHeaderSlide(headerRef) {
  const [headerExpanded, setHeaderExpanded] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    const header = headerRef.current;

    let lastScrollY = root.scrollTop;
    const handleScroll = () => {
      const currentY = root.scrollTop;

      if (currentY > 200 && currentY > lastScrollY) {
        header.style.transform = "translateY(-100%)";
        setHeaderExpanded(true);
      } else {
        header.style.transform = "translateY(0)";
        setHeaderExpanded(false);
      }

      lastScrollY = currentY;
    };

    root.addEventListener("scroll", handleScroll);
  }, [headerRef]);


  return { headerExpanded };
}
