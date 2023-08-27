import { useContext } from "react";
import { DataContext } from "./App";

const Content = () => {
  const { data, setData } = useContext(DataContext);
  let creditNumberRegEx = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  let monthRegEx = /(0[1-9]|1[1,2])/;
  let yearRegEx = /([2-4][3-9])/;
  let cvcRegEx = /(\d{3})/;

  function submitHandler() {
    if (data.name === "") {
      document.querySelector(".name-container p:nth-child(3)").style.display =
        "block";
      document.querySelector(".name-container p:nth-child(3)").textContent =
        "Can't be blank";
      document.querySelector(".name-container input").style.border =
        "thin solid var(--red)";
    } else if (data.name.length <= 2) {
      document.querySelector(".name-container p:nth-child(3)").style.display =
        "block";
      document.querySelector(".name-container p:nth-child(3)").textContent =
        "Name should be mor than 2 characters";
      document.querySelector(".name-container input").style.border =
        "thin solid var(--red)";
    } else {
      document.querySelector(".name-container p:nth-child(3)").style.display =
        "none";
      document.querySelector(".name-container input").style.border =
        "thin solid green";
      setData({ ...data, nameCheck: true });
    }
    if (data.number === "") {
      document.querySelector(".number-container p:nth-child(3)").style.display =
        "block";
      document.querySelector(".number-container p:nth-child(3)").textContent =
        "Can't be blank";
      document.querySelector(".number-container input").style.border =
        "thin solid var(--red)";
    } else {
      if (creditNumberRegEx.test(data.number)) {
        document.querySelector(
          ".number-container p:nth-child(3)"
        ).style.display = "none";
        document.querySelector(".number-container input").style.border =
          "thin solid green";
      } else {
        document.querySelector(
          ".number-container p:nth-child(3)"
        ).style.display = "block";
        document.querySelector(".number-container p:nth-child(3)").textContent =
          "Wrong format, numbers only with spaces";
        document.querySelector(".number-container input").style.border =
          "thin solid var(--red)";
      }
    }
    if (data.month === "") {
      document.querySelector(
        ".expdate-container p:nth-child(3)"
      ).style.display = "block";
      document.querySelector(".expdate-container p:nth-child(3)").textContent =
        "Can't be blank";
      document.querySelector(
        ".expdate-container input:nth-child(1)"
      ).style.border = "thin solid var(--red)";
    } else {
      if (monthRegEx.test(data.month)) {
        document.querySelector(
          ".expdate-container p:nth-child(3)"
        ).style.display = "none";
        document.querySelector(
          ".expdate-container input:nth-child(1)"
        ).style.border = "thin solid green";
      } else {
        document.querySelector(
          ".expdate-container p:nth-child(3)"
        ).style.display = "none";
        document.querySelector(
          ".expdate-container input:nth-child(1)"
        ).style.border = "thin solid var(--red)";
      }
    }
    if (data.year === "") {
      document.querySelector(
        ".expdate-container p:nth-child(3)"
      ).style.display = "block";
      document.querySelector(".expdate-container p:nth-child(3)").textContent =
        "Can't be blank";
      document.querySelector(
        ".expdate-container input:nth-child(2)"
      ).style.border = "thin solid var(--red)";
    } else {
      if (yearRegEx.test(data.year)) {
        document.querySelector(
          ".expdate-container p:nth-child(3)"
        ).style.display = "none";
        document.querySelector(
          ".expdate-container input:nth-child(2)"
        ).style.border = "thin solid green";
      } else {
        document.querySelector(
          ".expdate-container p:nth-child(3)"
        ).style.display = "none";
        document.querySelector(
          ".expdate-container input:nth-child(2)"
        ).style.border = "thin solid var(--red)";
      }
    }
    if (data.cvc === "") {
      document.querySelector(".cvc-container p:nth-child(3)").style.display =
        "block";
      document.querySelector(".cvc-container p:nth-child(3)").textContent =
        "Can't be blank";
      document.querySelector(".cvc-container input:nth-child(2)").style.border =
        "thin solid var(--red)";
    } else {
      if (cvcRegEx.test(data.cvc)) {
        document.querySelector(".cvc-container p:nth-child(3)").style.display =
          "none";
        document.querySelector(
          ".cvc-container input:nth-child(2)"
        ).style.border = "thin solid green";
      } else {
        document.querySelector(".cvc-container p:nth-child(3)").style.display =
          "block";
        document.querySelector(".cvc-container p:nth-child(3)").textContent =
          "Wrong format, numbers only";
        document.querySelector(".cvc-container input").style.border =
          "thin solid var(--red)";
      }
    }
    if (
      data.name.length > 2 &&
      creditNumberRegEx.test(data.number) &&
      monthRegEx.test(data.month) &&
      yearRegEx.test(data.year) &&
      cvcRegEx.test(data.cvc)
    ) {
      document.querySelector(".overlay").style.display = "grid";
    }
  }

  return (
    <div className="wrapper">
      <div className="name-container common">
        <p>CARDHOLDER NAME</p>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />
        <p>Can't be blank</p>
      </div>
      <div className="number-container common">
        <p>CARD NUMBER</p>
        <input
          type="text"
          maxLength={19}
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) =>
            setData({
              ...data,
              number: e.target.value,
            })
          }
        />
        <p>Wrong format, number only</p>
      </div>
      <div className="expdate-container common">
        <p>EXP. DATE (MM/YY)</p>
        <div className="exp-date">
          <input
            type="text"
            maxLength={2}
            placeholder="MM"
            onChange={(e) =>
              setData({
                ...data,
                month: e.target.value,
              })
            }
          />
          <input
            type="text"
            maxLength={2}
            placeholder="YY"
            onChange={(e) =>
              setData({
                ...data,
                year: e.target.value,
              })
            }
          />
        </div>
        <p>Can't be blank</p>
      </div>
      <div className="cvc-container common">
        <p>CVC</p>
        <input
          type="text"
          maxLength={3}
          placeholder="e.g. 123"
          onChange={(e) =>
            setData({
              ...data,
              cvc: e.target.value,
            })
          }
        />
        <p>Can't be blank</p>
      </div>
      <button onClick={submitHandler}>Confirm</button>
      <div className="overlay">
        <div className="success-image-holder">
          <img src="icon-complete.svg" alt="completed logo" />
        </div>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button onClick={() => window.location.reload()}>Continue</button>
      </div>
    </div>
  );
};

export default Content;
