import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
import Temp from "./components/Temp";
import DefaultHOC from "./HOC/Default.HOC";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
