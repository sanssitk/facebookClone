import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import {useStateValue} from "./StateProvider";

const useStyles = makeStyles((theme) => ({
  grey: {
    // color: theme.palette.getContrastText(grey[200]),
    backgroundColor: grey[300],
  },
}));

function Header() {
  const classes = useStyles();
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div
          className="header__option 
        header__option--active"
        >
          <HomeIcon style={{ fontSize: 35 }} />
        </div>
        <div className="header__option">
          <FlagIcon style={{ fontSize: 35 }} />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon style={{ fontSize: 35 }} />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon style={{ fontSize: 35 }} />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon style={{ fontSize: 35 }} />
        </div>
      </div>

      <div className="header__right">
        <IconButton>
          <div className="header__info">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
          </div>
        </IconButton>
        <IconButton>
          {" "}
          <Avatar className={classes.grey}>
            <AddIcon style={{ fontSize: 25 }} />
          </Avatar>{" "}
        </IconButton>

        <IconButton>
          {" "}
          <Avatar className={classes.grey}>
            <ForumIcon style={{ fontSize: 20 }} />
          </Avatar>{" "}
        </IconButton>
        <IconButton>
          <Avatar className={classes.grey}>
            <NotificationsActiveIcon style={{ fontSize: 20 }} />
          </Avatar>{" "}
        </IconButton>
        <IconButton>
          <Avatar className={classes.grey}>
            <ArrowDropDownIcon style={{ fontSize: 35 }} />
          </Avatar>{" "}
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
