import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import RandomCatPage from "./pages/RandomCatPage";
import BreedPage from "./pages/BreedPage";
import CatPage from "./pages/CatPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/random" element={<RandomCatPage />} />
        <Route path="/breed/:id" element={<BreedPage />} />
        <Route path="/cat/:id" element={<CatPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
