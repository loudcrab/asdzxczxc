import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const handleScroll = (event) => {
    const elite = document.getElementById("elite").getBoundingClientRect().y;
    const offsetWidth = document.getElementById("elite").offsetWidth;
    if (elite < window.pageYOffset) {
      const calc = elite - window.pageYOffset;

      document.getElementById("wtf").style.transform =
        "translateX(" + calc / 5 + "px)";
      // console.log('kekw')
      // console.log("asd", document.getElementById("wtf").style.transform);
      // const transform = document
      //   .getElementById("wtf")
      //   .style.transform.replace(/^\D+/g, "")
      //   .slice(0, -2);
      // console.log("tra", transform);
      // document.getElementById(
      //   "wtf"
      // ).style.transform = `translateX(${new Date().getTime()}%);`;
      // console.log("result", document.getElementById("wtf").style.transform);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="kekw one"></div>
      <div className="horizontal-trigger"></div>
      <div className="horizontal-section" id="elite">
        <div className="sticky">
          <div className="omega" id="wtf">
            <div className="horizontal-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" />
            </div>
            <div className="horizontal-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" />
            </div>
            <div className="horizontal-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" />
            </div>
            <div className="horizontal-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" />
            </div>
            <div className="horizontal-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="kekw two"></div>
    </div>
  );
}
