import React, { lazy, Suspense } from "react";
import Fallback from "../components/Fallback";
const PageNotFound = lazy(() => import("../views/pages/PageNotFound/PageNotFound"));
const Home = lazy(() => import("../views/pages/Home"));
const Auth = lazy(() => import("../views/pages/Auth"));
const Signup = lazy(() => import("../views/pages/Auth/signup"));

const index = [
  {
    path: "/",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Home />
      </Suspense>
    ),
  },

  {
    path: '/login',
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Signup />
      </Suspense>
    ),
  },
  // Luôn để cuối cùng PageNotFound
  {
    path: "",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <PageNotFound />
      </Suspense>
    ),
  },

];
export default index;
