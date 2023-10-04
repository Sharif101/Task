import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Financial from "../src/Components/Financial/Financial.jsx";
import Retirement from "../src/Components/Retirement/Retirement.jsx";
import Fetchdata from "./Components/Fetchdata/Fetchdata.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Financial></Financial>
      <Retirement></Retirement>
      {/* <Fetchdata></Fetchdata> */}
    </div>
  );
}

export default App;
