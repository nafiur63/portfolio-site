import React, { useState } from "react";
import avatar from "../../images/icon.jpg";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { Sling as Hamburger } from 'hamburger-react'
import BookIcon from '@material-ui/icons/Book';
import {Link} from "react-router-dom"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  Slider,
} from "@material-ui/core";

import {
  Menu,
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  // This group of buttons will be aligned to the right
  right: {
    marginLeft: "auto",
    marginRight: 12,
  },
  menuSliderContainer: {
    width: 310,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItems: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Work Experience",
    listPath: "/workexperience"
  },
  {
    listIcon: <BookIcon />,
    listText: "Education",
    listPath: "/education"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const [isOpen, setOpen] = useState(false)

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem component={Link} to={lsItem.listPath} className={classes.listItems} button key={key}>
            <ListItemIcon className={classes.listItems}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "transparent", boxShadow: "none" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
            <Menu style={{color:"white"}} fontSize="large"/>              
            </IconButton>
            <Typography variant="h4" style={{ color: "tan" }}>
              Profile
            </Typography>
            <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)} >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
