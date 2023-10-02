/* eslint-disable */

import PrivateRoute from "./components/PrivateRoute";

// PAGES
import NotFound from "./pages/404/NotFound";
import About from "./pages/about/About";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/blog/Blog404";
import BlogDetail from "./pages/blog/BlogDetail";
import BlogLayout from "./pages/blog/BlogLayout";
import Categories from "./pages/blog/Categories";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import HomeLayout from "./pages/home/HomeLayout";
import Profile from "./pages/profile/Profile";

const routes = [
  {
    path: "/",
    name: "home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        name: "index",
        element: <Home />,
      },
      {
        path: "about",
        name: "about",
        element: <About />,
      },
      {
        path: "contact",
        name: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        name: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            index: true,
            name: "index",
            element: <Blog />,
          },
          {
            path: "categories",
            name: "categories",
            element: <Categories />,
          },
          {
            path: "post/:id",
            name: "post",
            element: <BlogDetail />,
          },
          {
            path: "*",
            name: "notFound",
            element: <Blog404 />,
          },
        ],
      },
      {
        path: "/profile",
        name: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        name: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    name: "notFound",
    element: <NotFound />,
  },
];

const authMap = (routes) => {
  return routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });
};

export default authMap(routes);

/*

<Routes>
  <Route path="/" element={<HomeLayout />}>
    <Route index={true} element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="blog" element={<BlogLayout />}>
      <Route index={true} element={<Blog />} />
      <Route path="categories" element={<Categories />} />
      <Route path="post/:id" element={<BlogDetail />} />
      <Route path="*" element={<Blog404 />} />
    </Route>
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />
  </Route>
  <Route path="/auth" element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>;



*/
