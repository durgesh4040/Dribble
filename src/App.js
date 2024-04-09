import MainContent from "./Component/MainContent";
import Nav from "./Component/Nav";
import Footer1 from "./Component/Footer1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Profile from "./Component/Profile";
import Service from "./Component/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>

        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/mainContent" element={<MainContent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
