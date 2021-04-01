import React, { Fragment, useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";



export default function GitCard() {
  const [repos, setRepos] = useState([]);
  const userName = "dutaci28";
  useEffect(() => {
    fetch("https://api.github.com/users/" + userName + "/repos?sort=created")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, [userName]);

  const listItems = repos.map((repo) => (
    <Fragment>
      <ListItem>
        <ListItemText
          primary={repo.name}
          secondary={
            <React.Fragment>
              {repo.description}
              <Link href={repo.html_url}>--(Acceseaza)</Link>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Fragment>
  ));

  const firstItem = repos.filter((repo) => repo.name === "Pagina-personala");
  const renderAvatar = firstItem.map((repo) => (
    <div align="center">
      <Avatar style={{ width: 100, height: 100 }} src={repo.owner.avatar_url} />
      <Typography variant="h2" align="center">
        <div>{repo.owner.login}</div>
      </Typography>
      <Typography color="textSecondary">
        GitHub repos:
      </Typography>
    </div>
  ));

  return (
    <div>
      {renderAvatar}
      <List>{listItems}</List>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
