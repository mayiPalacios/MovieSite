"use client";
import { Inter } from "next/font/google";
import Movie from "lastHomework/components/movie";
import Header from "lastHomework/components/header";
import Footer from "lastHomework/components/footer";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>hola1</div>;
}
