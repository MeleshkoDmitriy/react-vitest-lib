import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Hello } from "./components/Hello/Hello";
import { Request } from "./components/Request/Request";

function App() {
  return (
    <>
      <Counter />
      <Hello />
      <Request requestId={Math.floor(Math.random() * 10) + 1} />
    </>
  );
}

export default App;
