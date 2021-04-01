import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import ScrollAnimation from "react-animate-on-scroll";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  aboutPage: {
    width: "max-width",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "110vh",
  },
});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.aboutPage} elevation={0}>
      <ScrollAnimation animateIn="bounceInRight" animateOnce>
        <Grid container justify="center" style={{ gap: 100 }}>
          <Grid item xs={10} sm={4}>
            <Typography bottomGutter variant="h2" align="center">
              Cine sunt eu?
            </Typography>

            <Typography variant="h5" align="center">
              Sunt o persoană deschisă, flexibilă, dornică de lucrul în echipă,
              sunt capabil să îmi exprim ideile fluent și să lucrez atât în
              limba română, cât și în engleză. Sunt deschis la a învăța lucruri
              noi. De asemenea, rețin informația rapid, lucrând eficient sub
              presiune.
            </Typography>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Typography bottomGutter variant="h2" align="center">
              Hard Skills:
            </Typography>

            <Grid container justify="center" style={{ gap: 40 }}>
              <Grid item xs={10} sm={5}>
                <Typography bottomGutter variant="h5" align="center" >
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
                  JavaScript <LinearProgress variant="determinate" value="60" />
                </Typography>
              </Grid>

              <Grid item xs={10} sm={5}>
                <Typography bottomGutter variant="h5" align="center">
                  Java <LinearProgress variant="determinate" value="50" />
                </Typography>
              </Grid>

              <Grid item xs={10} sm={5}>
                <Typography bottomGutter variant="h5" align="center">
                  C# <LinearProgress variant="determinate" value="40" />
                </Typography>
              </Grid>

              <Grid item xs={10} sm={5}>
                <Typography bottomGutter variant="h5" align="center">
                  Python <LinearProgress variant="determinate" value="40" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} sm={4}>
            <Typography bottomGutter variant="h2" align="center">
              Certificări:
            </Typography>

            <Typography variant="h5" align="center">
              • HTML5 App Dev Funamentals
              <Typography color="textSecondary">
                (Microsoft Technology Associate)
              </Typography>
            </Typography>
            <Typography variant="h5" align="center">
              • Database Design and Programming with SQL{" "}
              <Typography color="textSecondary">(Oracle Academy)</Typography>
            </Typography>
            <Typography variant="h5" align="center">
              • Data Structures and Algorithms, Master the Coding Interview{" "}
              <Typography color="textSecondary">(Udemy)</Typography>
            </Typography>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Typography bottomGutter variant="h2" align="center">
              Contact:
            </Typography>
            
            <Typography variant="h5" align="center">
              LinkedIn: linkedin.com/in/catalin-ionut-duta/
              <IconButton variant="contained" href="https://www.linkedin.com/in/catalin-ionut-duta/">
                <LinkedInIcon />
              </IconButton>
            </Typography>
            <Typography variant="h5" align="center">
              GitHub: github.com/dutaci28
              <IconButton variant="contained" href="https://github.com/dutaci28">
                <GitHubIcon />
              </IconButton>
            </Typography>
            <Typography variant="h5" align="center">
              Email: dutaci28@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Paper>
  );
}
