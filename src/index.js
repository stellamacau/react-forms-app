import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "./pages/NewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/new/:id",
        element: <NewsPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          const data = await response.json();
          return {
            id: params.id,
            title: data.title,
            body: data.body,
          };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
