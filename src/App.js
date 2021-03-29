import TemporaryDrawer from "./components/TemporaryDrawer";
import PaginaTitlu from "./components/PaginaTitlu";
import { StickyContainer, Sticky } from "react-sticky";
import PaginaExperienta from "./components/PaginaExperienta";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <div id="#titlu">
          <PaginaTitlu />
        </div>

        <div id="#experienta">
          <PaginaExperienta />
        </div>
        <Sticky>
          {({ style = "isSticky" }) => (
            <span style={style}>
              <TemporaryDrawer />
            </span>
          )}
        </Sticky>

        <div id="#altceva">
          <PaginaTitlu />
        </div>
      </StickyContainer>
    </ThemeProvider>
  );
}

export default App;
