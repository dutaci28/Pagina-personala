import LeftSideDrawer from "./components/LeftSideDrawer";
import TitlePage from "./components/TitlePage";
import { StickyContainer, Sticky } from "react-sticky";
import ExperiencePage from "./components/ExperiencePage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AboutPage from "./components/AboutPage";
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
          <TitlePage />
        </Element>

        <Element name="test2" className="element">
          <AboutPage />
        </Element>

        <Sticky>
          {({ style = "isSticky" }) => (
            <span style={style}>
              <LeftSideDrawer />
            </span>
          )}
        </Sticky>

        <Element name="test3" className="element">
          <ExperiencePage />
        </Element>
      </StickyContainer>
    </ThemeProvider>
  );
}

export default App;
