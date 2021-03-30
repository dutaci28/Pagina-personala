import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h5" align="center">
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          Pagina de titlu
        </Link>
      </Typography>

      <Typography variant="h5" align="center">
        <Link
          activeClass="active"
          className="test2"
          to="test2"
          spy={true}
          smooth={true}
          duration={500}
        >
          Despre
        </Link>
      </Typography>

      <Typography variant="h5" align="center">
        <Link
          activeClass="active"
          className="test3"
          to="test3"
          spy={true}
          smooth={true}
          duration={500}
        >
          Exprienta profesionala
        </Link>
      </Typography>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <IconButton variant="contained" onClick={toggleDrawer("left", true)}>
          <DehazeIcon style={{ fontSize: 40 }} />
        </IconButton>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
