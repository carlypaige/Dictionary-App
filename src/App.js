import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Dictionary</h1>
        <Dictionary defaultKeyword="Hello" />
        <a
          className="footer pb-5"
          href="https://github.com/carlypaige/dictionary-app"
          rel="noopener noreferrer"
        >
          Open-sourced code by Carly Paige
        </a>
      </div>
    </div>
  );
}
