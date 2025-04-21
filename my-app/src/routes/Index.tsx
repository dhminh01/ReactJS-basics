import HomePage from "../apps/pages/Home";
import LoginPage from "../apps/pages/Login";
import PostPage from "../apps/pages/Posts";
import NotFoundPage from "../apps/pages/NotFound";
import Layout from "../apps/components/Layout";
import PostDetails from "../apps/pages/PostDetails";

const pathname = {
  post: "/post",
  Login: "/login",
  home: "/",
  notFound: "*",
  postDetails: "/posts/:postId/",
};

export const AppRoutes = [
  { path: pathname.notFound, element: <NotFoundPage /> },
  { path: pathname.Login, element: <LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: pathname.home, element: <HomePage /> },
      { path: pathname.postDetails, element: <PostDetails /> },
      { path: pathname.post, element: <PostPage /> },
    ],
  },
];
