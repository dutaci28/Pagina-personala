import { Grid } from "@material-ui/core";
import TemporaryDrawer from "./components/TemporaryDrawer";
import PaginaTitlu from "./components/PaginaTitlu";
import { StickyContainer, Sticky } from "react-sticky";

function App() {
  return (
    <StickyContainer>
      <Grid container direction="column">
        <Grid item>
          <Sticky>
            {({ style = "isSticky" }) => (
              <div style={style}>
                <TemporaryDrawer />
              </div>
            )}
          </Sticky>
        </Grid>

        <Grid item container>
          <Grid item xs={12}>
            <PaginaTitlu />
          </Grid>
        </Grid>
      </Grid>
    </StickyContainer>
  );
}

export default App;
