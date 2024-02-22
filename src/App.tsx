import ContextProvider from "./context/ContextProvider";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
