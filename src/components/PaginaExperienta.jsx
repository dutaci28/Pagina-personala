import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LogoMLSA from "../img/LogoMLSA.png";
import LogoITC from "../img/LogoITC.png";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  pagExperienta: {
    width: "max-width",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "105vh",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

function PaginaExperienta() {
  const classes = useStyles();
  return (
    <Paper square className={classes.pagExperienta} elevation={0}>
      <div>
        <Typography variant="h1" align="center" gutterBottom>
          Experiență Profesională
        </Typography>
      </div>

      <Grid container justify="center" style={{ gap: 50 }}>
        <Grid item xs={10} sm={5}>
          <Card>
            <CardMedia
              image="../img/LogoMLSA.png"
              className={classes.media}
              title="MLSA"
            />
            <CardContent>
              <Typography color="textSecondary" component="p">
                Participarea în cadrul mai multor proiecte, cu ajutorul cărora
                am dezvoltat numeroase skill-uri, atât hard, cât și soft, cum ar
                fi adaptabilitatea și învățarea rapidă, în același timp fiind
                nevoit să ating o bază de utilizare a limbajelor C#, HTML, Css
                și al framework-ului .NET
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} sm={5}>
          <Card>
            <CardMedia
              image="../img/LogoMLSA.png"
              className={classes.media}
              title="MLSA"
            />
            <CardContent>
              <Typography color="textSecondary" component="p">
                Organizarea mai multor evenimente centralizate pe engagement
                între persoane din diferite medii sociale, precum Flash-Mob-uri,
                Treasure hunt-uri etc. Astfel, am dezvoltat skill-uri de
                comunicare, leadership și mai ales lucrul în echipă.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PaginaExperienta;
