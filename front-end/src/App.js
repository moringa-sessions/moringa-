import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import AddQuestion from "./pages/AddQuestion";
import Questions from "./pages/Questions";
import SingleQuestion from "./pages/SingleQuestion";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="questions" element={<Questions />} />
        <Route path="question/:id" element={<SingleQuestion />} />
        <Route path="addquestion" element={<AddQuestion />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
