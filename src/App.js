import { Typography, Grid } from "@material-ui/core";
import Header from "./components/Header";

function App(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <div>
            <Typography variant="h5" align="center">
              Salut! Eu sunt
            </Typography>
          </div>
          <div>
            <Typography variant="h1" align="center">
              Catalin-Ionut Duta
            </Typography>
          </div>
          <div>
            <Typography variant="h3" align="center">
              Student | Voluntar{" "}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
