import TemporaryDrawer from "./components/TemporaryDrawer";
import PaginaTitlu from "./components/PaginaTitlu";
import { StickyContainer, Sticky } from "react-sticky";

function App() {
  return (
    <StickyContainer>
      
      <Sticky>
        {({ style = "isSticky" }) => (
          <div style={style}>
            <TemporaryDrawer />
          </div>
        )}
      </Sticky>

      <PaginaTitlu />
      
      
    </StickyContainer>
  );
}

export default App;
