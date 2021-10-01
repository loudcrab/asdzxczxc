import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const handleScroll = (event) => {
    const elite = document.getElementById("elite");
    const wftWidth = document.getElementById("wtf").offsetWidth;
    // console.log("wftHeight", wftHeight);

    const top = elite.offsetTop;

    const bottom = top + elite.offsetHeight - window.innerHeight;
    const eliteHeight = document.getElementById("elite").offsetHeight;

    if (top < window.pageYOffset && bottom > window.pageYOffset) {
      const max = eliteHeight - window.innerHeight;
      const calc = (top - window.pageYOffset) * -1;
      const res = (calc / max) * (wftWidth - window.innerWidth);

      // console.log("wftHeight", wftHeight - window.innerHeight, res);
      document.getElementById("wtf").style.transform =
        "translateX(-" + res + "px)";
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="kekw"></div>
      <div className="horizontal-trigger"></div>
      <div className="horizontal-section" id="elite">
        <div className="sticky">
          <div className="omega" id="wtf">
            <div className="horizontal-item one">
              Мы любители пива
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Weizenbier.jpg" />
            </div>
            <div className="horizontal-item one">
              Приглашаем вас посетить Октоберфест
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Oktoberfest1.jpg" />
            </div>
            <div className="horizontal-item one">
              До встречи в октябре
              <img src="https://www.m24.ru/b/d/nBkSUhL2hFQkkMmzJ76BvMKnxdDs95C-miTNnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=sAuHCl5wAysF1g3TUgIwLQ.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="kekw twoo"></div>
    </div>
  );
}
