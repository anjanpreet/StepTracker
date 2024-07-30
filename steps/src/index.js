import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function StepsMessage({ children }) {
  return <p>{children}</p>;
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} id="previous">
      {children}
    </button>
  );
}

function App() {
  const [step, setStep] = useState(1);
  function handleNextBtn() {
    step <= 2 ? setStep((step) => step + 1) : setStep(step);
  }
  function handlePrevBtn() {
    step > 1 ? setStep((step) => step - 1) : setStep(step);
  }
  return (
    <>
      <div id="container">
        <section id="steps-tracker">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
        </section>
        <section id="steps-message">
          <StepsMessage>{messages[step - 1]}</StepsMessage>
        </section>
        <section id="buttons">
          <Button onClick={handlePrevBtn}>👈 Prev</Button>
          <Button onClick={handleNextBtn}>Next 👉</Button>
        </section>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
