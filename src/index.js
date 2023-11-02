import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList/>,
  },
  {
    path: "/:id",
    element: <MovieDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);