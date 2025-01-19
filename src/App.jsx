import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Hello } from "./components/Hello/Hello";
import { InputTags } from "./components/Inputs/InputTags/InputTags";
import { Request } from "./components/Request/Request";

function App() {
  return (
    <>
      <Counter />
      <Hello />
      <Request requestId={Math.floor(Math.random() * 10) + 1} />
      <InputTags initialTags={['123', 'ghbz']} />
    </>
  );
}

export default App;
