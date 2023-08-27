import { useContext, useEffect } from "react";
import { DataContext } from "./App";

const TopSection = () => {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (data.name === "") {
      document.querySelector(".details p:nth-child(2)").textContent =
        "jane appleseed";
    } else {
      document.querySelector(".details p:nth-child(2)").textContent = data.name;
    }
    if (data.number === "") {
      document.querySelector(".details p:nth-child(1)").textContent =
        "0000 0000 0000 0000";
    } else {
      document.querySelector(".details p:nth-child(1)").textContent =
        data.number;
    }
    if (data.month === "") {
      document.querySelector(".details span:nth-child(1)").textContent = "00";
    } else {
      document.querySelector(".details span:nth-child(1)").textContent =
        data.month;
    }
    if (data.year === "") {
      document.querySelector(".details span:nth-child(2)").textContent = "00";
    } else {
      document.querySelector(".details span:nth-child(2)").textContent =
        data.year;
    }
    if (data.cvc === "") {
      document.querySelector(".card-back-holder p").textContent = "000";
    } else {
      document.querySelector(".card-back-holder p").textContent = data.cvc;
    }
  }, [data]);

  return (
    <div className="header">
      <div className="card-back-holder">
        <img src="bg-card-back.png" alt="card back" />
        <p>000</p>
      </div>
      <div className="card-front-holder">
        <img src="bg-card-front.png" alt="card front" />
        <div className="circles">
          <div className="big-circle"></div>
          <div className="small-circle"></div>
        </div>
        <div className="details">
          <p>0000&nbsp;0000&nbsp;0000&nbsp;0000</p>
          <p>jane appleseed</p>
          <p>
            <span>00</span>/<span>00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
