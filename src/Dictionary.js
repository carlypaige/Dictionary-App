import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              onChange={handleChange}
            />
            <input type="submit" value="Search" className="btn btn-light" />
            <br />
            <div className="hint">
              Suggested words: apple, sunset, mauve, light...
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading..";
  }
}
