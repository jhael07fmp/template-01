import LayoutComponent from "./components/layout/LayoutComponent";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <LayoutComponent>
        <div className="flex gap-x-1 w-full h-screen">
          <div className="w-8/12  bg-black">klk</div>
          <div className="w-full  bg-black">klk</div>
          <div className="w-9/12 bg-black">klk</div>
        </div>
      </LayoutComponent>
    </ContextProvider>
  );
};

export default App;
