import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import Login from "./pages/login/login";
import DashboardUser from "./pages/dahsboardUser/DashboardUser";
import Sidebar from "./pages/sidebar/Sidebar";
import Settingan from "./pages/settingan/Settingan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
        </Route>
        // Di App.jsx
        <Route path="/DashboardUser" element={<DashboardUser />}>
          <Route
            index
            element={
              <>
                <Sidebar />
                <DashboardUser />
              </>
            }
          />
        </Route>
        <Route path="/Settingan" element={<Settingan />} />{" "}
        {/* Tambahkan rute untuk Settingan di sini */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
