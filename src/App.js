import { Button } from "./components/core/button";

export default function App() {
  return (
    <Button
      onClick={function () {
        alert("Ola");
      }}
    >
      Send
    </Button>
  );
}
