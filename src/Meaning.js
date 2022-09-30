import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Meaning: </strong>
        {props.meaning.definitions[0].definition}
      </p>
      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
