import "./styles.css";
import cat from "./cat.png";
import Btn from "./Btn.js";
import ModeToggler from "./ModeToggler.js";
function Logo(props) {
  const userPic = <img src={cat} />;
  return userPic;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Logo />
      <Btn />
      <ModeToggler />
    </div>
  );
}
