import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ImgSpate from "../img/ImgSpate.jpg";

import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles({
  pagTitlu: {
    width: "max-width",
    backgroundImage: `url(${ImgSpate})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "110vh",
  },
});

function PaginaTitlu() {
  const classes = useStyles();
  return (
    <Paper className={classes.pagTitlu} elevation={0}>
      <div>
        <Typography style={{ color: "white" }} variant="h1" align="center">
          <br></br>
          <br></br>
          <br></br>
        </Typography>
      </div>
      <Grow in={true} timeout={2000}>
        <div>
          <Typography style={{ color: "white" }} variant="h5" align="center">
            Salut! Eu sunt
          </Typography>
        </div>
      </Grow>
      <Grow in={true} timeout={3000}>
        <div>
          <Typography style={{ color: "white" }} variant="h1" align="center">
            Cătălin-Ionuț <span style={{ color: "#E65F78" }}>Duță</span>
          </Typography>
        </div>
      </Grow>
      <Grow in={true} timeout={4000}>
        <div>
          <Typography style={{ color: "white" }} variant="h3" align="center">
            Student | Voluntar{" "}
          </Typography>
        </div>
      </Grow>
      <div>
        <Typography variant="h1" align="center"></Typography>
      </div>
    </Paper>
  );
}

export default PaginaTitlu;
