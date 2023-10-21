import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"

function App () {
  const router = createBrowserRouter([
    {
    path:"/",
    element: <Root />,
    },
  {
    path:"/counter",
    element: <Counter />, 
  },
  {
    path:"*",
    element: <h1> Error 404 Page </h1>, 
  },
  ]);

    return (
      <> 
    <RouterProvider router={router}></RouterProvider>
    </>
    );
}
    

export default App;