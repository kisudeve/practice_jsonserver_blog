import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import Write from "./pages/Write";
import About from "./pages/About";
import Read from "./pages/Read";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="write" element={<Write />} />
          <Route path="read/:id" element={<Read />} />
        </Route>
      </Routes>
    </>
  );
}
