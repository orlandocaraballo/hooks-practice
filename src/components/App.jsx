import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import { TitleProvider } from "../context/Title.js";
import "./App.css";

export default function App() {
  return (
    <TitleProvider>
      <Header />
      <Main />
      <Footer />
    </TitleProvider>
  );
}
