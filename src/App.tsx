import { useState } from "react";
import "./App.scss";

function App() {
  const [error, setError] = useState<string>("");
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) {
      setError("Please provide a valid email.");
    } else {
      setError("");
    }
  };
  return (
    <>
      <header>
        <img alt="logo-base-apparel" src="/images/logo.svg" />
      </header>
      <div className="image-woman" />
      <main>
        <h1>
          <span>WE'RE</span>
          <span>COMING</span>
          <span>SOON</span>
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form>
          <input type="email" placeholder="Email Address" onBlur={handleBlur} />
          <button
            type="submit"
            onSubmit={() => {
              setError("");
            }}
          >
            <img alt="submit email button" src="/images/icon-arrow.svg" />
          </button>
          <span className={error != "" ? "show-error" : ""}>{error}</span>
          <img
            className={error != "" ? "show-error" : ""}
            src="/images/icon-error.svg"
            alt="error"
          />
        </form>
      </main>
    </>
  );
}

export default App;
