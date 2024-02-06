import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./PAGES/Home";
import More from "./PAGES/More";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "country/:country",
          element: <More />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
