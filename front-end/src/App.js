import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Layout from "./layout/Layout";
import AddQuestion from "./pages/AddQuestion";
import Questions from "./pages/Questions";
import SingleQuestion from "./pages/SingleQuestion";
import QuestionProvider from "./context/QuestionContext";
import UserProvider from "./context/UserContext";


function App() 
{

  return (
    <UserProvider>
    <QuestionProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="questions" element={<Questions />} />
        <Route path="profile" element={<Profile />} />

        <Route path="question/:id" element={<SingleQuestion />} />
        <Route path="addquestion" element={<AddQuestion />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </QuestionProvider>
  </UserProvider>
  );
}

export default App;
