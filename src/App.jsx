import React from "react";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Order";
import TrustedBy from "./components/trustBy/TrustBy";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Pay from "./pages/pays/Pays";
import Add from "./pages/add/Add";
import Success from "./pages/success/Success";
import MyGigs from "./pages/myGigs/MyGigs";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs/>,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig/>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
