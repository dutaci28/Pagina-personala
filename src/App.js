import TemporaryDrawer from "./components/TemporaryDrawer";
import PaginaTitlu from "./components/PaginaTitlu";
import { StickyContainer, Sticky } from "react-sticky";
import PaginaExperienta from "./components/PaginaExperienta";

function App() {
  return (
    <StickyContainer>
      
      <PaginaTitlu />

      <PaginaExperienta />

      <Sticky>
        {({ style = "isSticky" }) => (
          <span style={style}>
            <TemporaryDrawer />
          </span>
        )}
      </Sticky>
      
      
    </StickyContainer>
  );
}

export default App;
