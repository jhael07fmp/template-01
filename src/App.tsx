import LayoutComponent from "./components/layout/LayoutComponent";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <LayoutComponent />
    </ContextProvider>
  );
};

export default App;
