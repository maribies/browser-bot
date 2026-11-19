import { useState, useEffect, useRef } from "react";

export const Chatbot = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const worker = useRef<Worker | null>(null);

  useEffect(() => {
    worker.current ??= new Worker(new URL("../worker.js", import.meta.url), {
      type: "module",
    });

    // Create a callback function for messages from the worker thread.
    const onMessageReceived = (e: MessageEvent) => {
      switch (e.data.status) {
        case "initiate":
          setReady(false);
          break;
        case "download":
          // a file download has started
          break;
        case "progress":
          // For only one file
          break;
        case "progress_total":
          // All files for the models together
          // TODO: A progress bar for better UX in the future
          break;
        case "done":
          break;
        case "ready":
          setReady(true);
          break;
        case "complete":
          setDisabled(false);
          break;
      }
    };

    worker.current.addEventListener("message", onMessageReceived);

    return () =>
      worker?.current?.removeEventListener("message", onMessageReceived);
  }, []);

  const submit = () => {
    setDisabled(true);
    setOutput("");
    worker?.current?.postMessage({
      type: "embed",
      text: input.trim(),
    });
  };

  const loadModel = () => {
    worker?.current?.postMessage({
      type: "load",
    });
  };

  return (
    <div>
      {!ready ? (
        <>
          <p>Would you like to chat with the Browser Bot 🤖?</p>
          <button disabled={ready} onClick={loadModel}>
            Load model?
          </button>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <input type="submit" disabled={disabled} onClick={submit} />
          </form>
          <p>Chatbot results: {output}</p>
        </>
      )}
    </div>
  );
};
