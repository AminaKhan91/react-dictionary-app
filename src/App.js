import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" img-fluid="true" alt="logo" />
      </header>
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Amina and is{" "}
            <a
              href="https://github.com/AminaKhan91/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
