import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import ImgSpate from "../img/ImgSpate.jpg";

const useStyles = makeStyles({
  pagExperienta: {
    width: "max-width",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
});

function PaginaExperienta() {
  const classes = useStyles();
  return (
    <Paper square className={classes.pagExperienta} elevation={0}>

      <div>
        <Typography variant="h3" align="center">
          Student | Voluntar{" "}
        </Typography>
      </div>

    </Paper>
  );
}

export default PaginaExperienta;
