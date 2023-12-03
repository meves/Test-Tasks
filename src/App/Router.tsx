import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { TestPage } from "../pages/TestPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/test" element={<TestPage/>} />
    </Routes>
  )
}