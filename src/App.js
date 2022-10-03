import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Dictionary</h1>
        <Dictionary defaultKeyword="Hi" />
        <a
          className="footer pb-4 mt-1 text-decoration-none"
          href="https://github.com/carlypaige/dictionary-app"
          rel="noopener noreferrer"
        >
          Open-sourced code by Carly Paige
        </a>
      </div>
    </div>
  );
}
