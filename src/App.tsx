import ContextProvider from "./context/ContextProvider";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};

export default App;
