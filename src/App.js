import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./views/Error404";
import Page from "./components/Page";

function App() {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Page>
  );
}

export default App;
