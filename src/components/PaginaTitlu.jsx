import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ImgSpate from "../img/ImgSpate.jpg";
import Grow from "@material-ui/core/Grow";
import Typical from "react-typical";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-scroll";

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
  iconita: {
    transform: "scale(3)",
    color: "#E65F78"
  }
});

function PaginaTitlu() {
  const classes = useStyles();
  return (
    <Paper square className={classes.pagTitlu} elevation={0}>
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
            <Typical
              steps={["Student", 3000, "Voluntar", 3000, "Programator", 3000]}
              loop={Infinity}
              wrapper="p"
            />
            <Link
              className="test2"
              to="test2"
              spy={true}
              smooth={true}
              duration={500}
            >
              <br></br>
              <br></br>
              <br></br>
              <ExpandMoreIcon className={classes.iconita}/>
            </Link>
          </Typography>
        </div>
      </Grow>
    </Paper>
  );
}

export default PaginaTitlu;
