import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";

import Temp from "./components/Temp";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
