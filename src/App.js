import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello Weather Search Engine</h1>
        <SearchEngine />
        <footer>
          This project was coded by Paola Severino and is
          <a
            href="https://github.com/PaolaCrypto/weather-react-app"
            target="_blank"
          >
            open sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
