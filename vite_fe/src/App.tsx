import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { ContextProvider } from "./global/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={mainRouter} />
    </ContextProvider>
  );
};

export default App;
