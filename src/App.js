import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};
var EmojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [emojis, setEmojis] = useState("");
  const [meaning, setMeaning] = useState("Meaning Will Appear Here");
  function emojiInputHandler(event) {
    var input = event.target.value;
    var mean = emojiDictionary[input];

    if (mean === undefined) {
      mean = "Oops! Invalid Input";
      setMeaning(mean);
      input = null;
    }
    setMeaning(mean);
    setEmojis(input);
  }
  function emojiClickHandler(emoji) {
    var item = emojiDictionary[emoji];
    setMeaning(item);
    setEmojis(emoji);
  }
  return (
    <div className="App">
      <h1>Emoji Pedia</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Put Your Emoji Here"}
      ></input>
      <h2>{emojis}</h2>
      <h3
        style={{
          color: "#010101",
          fontWeight: "700",
          fontSize: "1.5rem"
        }}
      >
        {meaning}
      </h3>
      {EmojisWeKnow.map((emoji) => (
        <span
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => emojiClickHandler(emoji)}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
