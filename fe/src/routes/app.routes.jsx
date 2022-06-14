import { Route, Routes } from "react-router-dom";
import { EditNote } from "../pages/EditNote";
import { Home } from "../pages/Home";
import { New } from "../pages/New";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<New/>} />
      <Route path="/edit/:id" element={<EditNote/>} />
    </Routes>
  )
}