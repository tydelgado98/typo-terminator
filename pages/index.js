import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState(" ");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setTextInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>AI Editor</title>
        <link rel="icon" href="/writingicon.png" />
      </Head>

      <main className={styles.main}>
        <img src="/writingicon.png" className={styles.icon} />
        <h3>UpGrade Me!</h3>
        <p> Use this sample text if you don't have any.</p>
        <p>"Why due people say “break uh leg” wen u go awn staje? because eviry play has uh cast.Why ar their gates around cemetereis? because people ar dyin two jet inn."</p>
        <form onSubmit={onSubmit}>
          <textarea
            rows="10"
            cols="50"
            name="text"
            placeholder="Enter text (max 250 words)"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <input type="submit" value="Edit text" />
          <p>Give me a few seconds, I'm new an a little slow/p>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}