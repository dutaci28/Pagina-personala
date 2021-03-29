import TemporaryDrawer from "./components/TemporaryDrawer";
import PaginaTitlu from "./components/PaginaTitlu";
import { StickyContainer, Sticky } from "react-sticky";
import PaginaExperienta from "./components/PaginaExperienta";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PaginaDespre from "./components/PaginaDespre";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <PaginaTitlu />
        
        <PaginaDespre />

        <Sticky>
          {({ style = "isSticky" }) => (
            <span style={style}>
              <TemporaryDrawer />
            </span>
          )}
        </Sticky>

        <PaginaExperienta />

      </StickyContainer>
    </ThemeProvider>
  );
}

export default App;
