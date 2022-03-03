import React from "react";

function ButtonOnTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className="footer-ontop" onClick={scrollToTop}>
      Back to top
    </button>
  );
}

export default ButtonOnTop;
