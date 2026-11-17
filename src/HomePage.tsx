import type { PageProps } from "./routes";
import { Chatbot } from "./components";

export const HomePage = ({ data }: PageProps) => {
  return (
    <div>
      <h1>Home Page!</h1>
      <p>Data: {JSON.stringify(data)}</p>
      <Chatbot />
    </div>
  );
};
