import { useState } from "react";

export const Chatbot = () => {
  const [input, setInput] = useState("");
  const [output] = useState("");
  const [disabled] = useState(false);

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button disabled={disabled} onClick={() => {}}>
        Submit
      </button>
      <p>Chatbot results: {output}</p>
    </div>
  );
};
