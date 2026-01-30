import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h2>Leave your review</h2>
        <p>
          We are happy for your purchase, fill out the form below to rate the
          product
        </p>
      </div>
      <div className="form-container">
        <p>steps</p>
        <form>
          <div className="inputs-container"></div>
          <div className="actions">
            <button type="button">
              <GrFormPrevious />
              <span>Back</span>
            </button>
            <button type="submit">
              <span>Next</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
