import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          style={{
            position: "fixed",
            fontSize: "34px",
            bottom: "40px",
            right: "30px",
            cursor: "pointer",
            textAlign: "center",
            border: "none",
          }}
        />
      )}
    </div>
  );
}
