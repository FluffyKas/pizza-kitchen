import {
  Home,
  About,
  Base,
  ContactPage,
  Finish,
  ForgotPassword,
  Login,
  SignUp,
  Toppings,
} from "./";

export const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "base",
    element: <Base />,
  },
  {
    path: "toppings",
    element: <Toppings />,
  },
  {
    path: "finish",
    element: <Finish />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
];
