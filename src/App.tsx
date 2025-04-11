import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundpage";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/allProducts" element={<AllProducts />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
