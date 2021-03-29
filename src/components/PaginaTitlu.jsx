import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import ImgSpate from "../img/ImgSpate.jpg";

const useStyles = makeStyles({
  pagTitlu: {
    width: "max-width",
    backgroundImage: `url(${ImgSpate})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

function PaginaTitlu() {
  const classes = useStyles();
  return (
    <Paper
      style={{ height: "100vh" }}
      className={classes.pagTitlu}
      elevation={3}
    >
      <div>
        <Typography style={{ color: "white" }} variant="h5" align="center">
          Salut! Eu sunt
        </Typography>
      </div>
      <div>
        <Typography style={{ color: "white" }} variant="h1" align="center">
          Catalin-Ionut Duta
        </Typography>
      </div>
      <div>
        <Typography style={{ color: "white" }} variant="h3" align="center">
          Student | Voluntar{" "}
        </Typography>
      </div>

      <div>
        <Typography variant="h1" align="center"></Typography>
      </div>
    </Paper>
  );
}

export default PaginaTitlu;
