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
import Footer from "../Footer/Footer";


const useStyles = makeStyles((theme) => ({
  // This group of buttons will be aligned to the right
  right: {
    marginLeft: "auto",
    marginRight: 12,
  },
  menuSliderContainer: {
    width: 310,
    backgroundImage: "linear-gradient(to bottom right, #090979, #00d4ff)",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItems: {
    color: "white",
    fontFamily:"serif"
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
    listIcon: <ContactMail />,
    listText: "Skills",
    listPath: "/skills"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
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
    <Box className={classes.menuSliderContainer} style={{fontFamily:"serif"}} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem  component={Link} to={lsItem.listPath} className={classes.listItems} button key={key}>
            <ListItemIcon className={classes.listItems}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText disableTypography
              style={{fontFamily:"serif", fontSize:"1.3rem"}} primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "transparent", boxShadow: "none" }}>
          <Toolbar style={{ position: "absolute", right: "0" }}>           
            <Typography variant="h4" style={{ color: "#80bfff", fontFamily:"serif" }}>
              Profile
            </Typography>
            <IconButton aria-label="Menu" onClick={toggleSlider("right", true)}>
            <Menu style={{color:"white"}} fontSize="large"/>              
            </IconButton>
            <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)} >
              {sideList("right")}
              <Footer/>
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;