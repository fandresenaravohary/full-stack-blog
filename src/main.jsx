import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/Write.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/:slug" element={<SinglePostPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
