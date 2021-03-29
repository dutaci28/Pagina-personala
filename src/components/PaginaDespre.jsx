import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  pagTitlu: {
    width: "max-width",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "110vh",
  },
});

function PaginaDespre() {
  const classes = useStyles();
  return (
    <Paper className={classes.pagTitlu} elevation={0}>
      <Grid container justify="center" style={{ gap: 50 }}>
        <Grid item xs={10} sm={4}>
          <Typography bottomGutter variant="h3" align="center">
            Cine sunt eu?
          </Typography>

          <Typography variant="h5" align="center">
            Sunt o persoană deschisă, flexibilă, dornică de lucrul în echipă,
            sunt capabil să îmi exprim ideile fluent și să lucrez atât în limba
            română, cât și în engleză. Sunt dornic de a învăța lucruri noi. De
            asemenea, rețin informația rapid, lucrând eficient sub presiune.
          </Typography>
        </Grid>

        <Grid item xs={10} sm={4}>
          <Typography bottomGutter variant="h3" align="center">
            Hard Skills:
          </Typography>

          <Grid container justify="center" style={{ gap: 40 }}>
            <Grid item xs={10} sm={5}>
              <Typography bottomGutter variant="h5" align="center">
                C/C++
                <LinearProgress variant="determinate" value="80" />
              </Typography>
            </Grid>

            <Grid item xs={10} sm={5}>
              <Typography bottomGutter variant="h5" align="center">
                SQL <LinearProgress variant="determinate" value="80" />
              </Typography>
            </Grid>

            <Grid item xs={10} sm={5}>
              <Typography variant="h5" align="center">
                HTML <LinearProgress variant="determinate" value="60" />
              </Typography>
            </Grid>

            <Grid item xs={10} sm={5}>
              <Typography bottomGutter variant="h5" align="center">
                CSS <LinearProgress variant="determinate" value="60" />
              </Typography>
            </Grid>

            <Grid item xs={10} sm={5}>
              <Typography bottomGutter variant="h5" align="center">
                JavaScript <LinearProgress variant="determinate" value="50" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10} sm={4}>
          <Typography bottomGutter variant="h3" align="center">
            Contact:
          </Typography>
          <Typography variant="h5" align="center">
            Email: dutaci28@gmail.com
          </Typography>
          <Typography variant="h5" align="center">
            LinkedIn: linkedin.com/in/catalin-ionut-duta/
          </Typography>
          <Typography variant="h5" align="center">
            GitHub: github.com/dutaci28
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PaginaDespre;
