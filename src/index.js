import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "./pages/NewPage";
import NewsListPage from "./pages/NewsListPage";
import ContactPage from "./pages/ContactPage";

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
        path: "/news",
        element: <NewsListPage />,
        loader: async () => {
          const response = await fetch(
            `http://jsonplaceholder.typicode.com/posts/`
          );
          const data = await response.json();
          return { data: data };
        },
      },

      {
        path: "/news/:id",
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
      {
        path: "/contact",
        element: <ContactPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const fullname = formData.get("fullname");
          return {
            id: 1000,
            fullname: fullname,
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
