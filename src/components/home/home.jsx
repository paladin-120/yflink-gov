import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import DetailsIcon from "@material-ui/icons/ShowChart"; // Details

const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  card: {
    flex: "1",
    height: "25vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "0px",
    transition: "background-color 0.2s linear",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      minWidth: "20%",
      minHeight: "50vh",
    },
  },
  stake: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.blue,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
    },
    "& .title": {
      color: colors.blue,
    },
    "& .icon": {
      color: colors.blue,
    },
  },
  vote: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.blackBlue,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
    },
    "& .title": {
      color: colors.blackBlue,
      display: "block",
    },
    "& .soon": {
      color: colors.blackBlue,
      display: "none",
    },
    "& .icon": {
      color: colors.blackBlue,
    },
  },
  lock: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.tomato,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
    },
    "& .title": {
      color: colors.tomato,
    },
    "& .icon": {
      color: colors.tomato,
    },
  },
  title: {
    padding: "24px",
    paddingBottom: "0px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "24px",
    },
  },
  icon: {
    fontSize: "60px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "100px",
    },
  },
  link: {
    textDecoration: "none",
  },
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, location } = this.props;

    return (
      <div className={classes.root}>
        <Card
          className={`${classes.card} ${classes.stake}`}
          onClick={() => {
            this.nav(location.pathname + "staking");
          }}
        >
          <DetailsIcon className={`${classes.icon} icon`} />
          <Typography variant={"h3"} className={`${classes.title} title`}>
            Stake
          </Typography>
        </Card>
        <Card
          className={`${classes.card} ${classes.vote}`}
          onClick={() => {
            this.nav(location.pathname + "vote");
          }}
        >
          <HowToVoteIcon className={`${classes.icon} icon`} />
          <Typography variant={"h3"} className={`${classes.title} title`}>
            Vote
          </Typography>
        </Card>
        {/*<Card className={ `${classes.card} ${classes.lock}` } onClick={ () => { this.nav(location.pathname+'lock') }}>
          <LockIcon className={ `${classes.icon} icon` } />
          <Typography variant={'h3'} className={ `${classes.title} title` }>Lock</Typography>
        </Card>*/}
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
