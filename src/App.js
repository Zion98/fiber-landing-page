import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/main";
import SignIn from "./components/SignIn";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {" "}
      </Route>
      <Route path="/signup" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
