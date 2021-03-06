import "./styles.css";

export default function App() {
  const string = "healo whal";

  return (
    <div className="App">
      <h1></h1>
      <h3>before replacement: {string}</h3>

      <h3>After replacement: {string.replaceAll("al", "ll")}</h3>
    </div>
  );
}
