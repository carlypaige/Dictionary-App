import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
