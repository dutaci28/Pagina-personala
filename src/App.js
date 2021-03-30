import TemporaryDrawer from "./components/MeniuStanga";
import PaginaTitlu from "./components/PaginaTitlu";
import { StickyContainer, Sticky } from "react-sticky";
import PaginaExperienta from "./components/PaginaExperienta";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PaginaDespre from "./components/PaginaDespre";
import { Element } from "react-scroll";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <Element name="test1" className="element">
          <PaginaTitlu />
        </Element>

        <Element name="test2" className="element">
          <PaginaDespre />
        </Element>

        <Sticky>
          {({ style = "isSticky" }) => (
            <span style={style}>
              <TemporaryDrawer />
            </span>
          )}
        </Sticky>

        <Element name="test3" className="element">
          <PaginaExperienta />
        </Element>
      </StickyContainer>
    </ThemeProvider>
  );
}

export default App;
