import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ImgSpate2 from "../img/ImgSpate2.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import GitCard from "./GitCard";

const useStyles = makeStyles({
  experiencePage: {
    width: "max-width",
    display: "flex",
    backgroundImage: `url(${ImgSpate2})`,
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent: "center",
    height: "110vh",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

export default function ExperiencePage() {
  const classes = useStyles();
  return (
    <Paper square className={classes.experiencePage} elevation={0}>
      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <div>
          <Typography
            style={{ color: "white" }}
            variant="h1"
            align="center"
            gutterBottom
          >
            Proiecte / Voluntariat
          </Typography>
        </div>

        <Grid container justify="center" style={{ gap: 80 }}>
          <Grid item xs={10} sm={3}>
            <Card elevation={3}>
              <CardMedia
                image="https://i.postimg.cc/qvxxmwtT/LogoMLSA.jpg"
                className={classes.media}
                title="MLSA"
              />
              <CardContent>
                <Typography>
                  Microsoft Learn Student Ambassador
                  <Typography gutterBottom color="textSecondary">
                    2019-2021 Membru - Technology Dept.
                  </Typography>
                </Typography>
                <Typography color="textSecondary" component="p">
                  Participarea în cadrul mai multor proiecte, cu ajutorul cărora
                  am dezvoltat numeroase skill-uri, atât hard, cât și soft, cum
                  ar fi adaptabilitatea și învățarea rapidă, în același timp
                  fiind nevoit să ating o bază de utilizare a limbajelor C#,
                  HTML, Css și al framework-ului .NET
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          
          <Grid item xs={10} sm={4}>
            <Card elevation={3}>
              
              <CardContent>
                <Typography>
                  
                  <GitCard />
                  
                </Typography>
                </CardContent>
                
            </Card>
          </Grid>


          <Grid item xs={10} sm={3}>
            <Card elevation={3}>
              <CardMedia
                image="https://i.postimg.cc/Xvy7jHwM/LogoITC.jpg"
                className={classes.media}
                title="ITC"
              />
              <CardContent>
                <Typography gutterBottom>
                  Rotary Interact Club Târgoviște - Membru
                  <Typography color="textSecondary">
                    2016-2018 Membru - General
                  </Typography>
                </Typography>
                <Typography color="textSecondary" component="p">
                  Organizarea mai multor evenimente centralizate pe engagement
                  între persoane din diferite medii sociale, precum
                  Flash-Mob-uri, Treasure hunt-uri etc. Astfel, am dezvoltat
                  skill-uri de comunicare, leadership și mai ales lucrul în
                  echipă.
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Paper>
  );
}
