import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Board from "../components/Board/Board";
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link, NavLink} from 'react-router-dom';
import './Layout.css';
import Button from '@material-ui/core/Button';
import AddTask from '../components/AddTask/AddTask';
import { Switch, Route } from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as action from '../store/actions/taskAction';
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: "65px"
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: "65px"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.initTaskList())
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch(action.logoutAct());
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
        {open === false ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        ) :             
        (
            <IconButton 
                style={{marginRight: "16px"}}
                color="inherit"
                aria-label="close drawer"
                edge="start"
                onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
        )
        }
          <Typography variant="h6" noWrap style={{flexGrow: 1}}>
            Jira Board
          </Typography>
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>   
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <NavLink className="link" to="/dashboard">
          <List className="link">
              <ListItem button >
                <ListItemIcon style={{color: "inherit"}}>
                  <DashboardIcon  />
                </ListItemIcon>
                Dashboard
              </ListItem>
          </List>
        </NavLink>  
        <NavLink className="link" to="/add-task">
          <List className="link">
              <ListItem button >
                <ListItemIcon style={{color: "inherit"}}>
                  <AssignmentIcon  />
                </ListItemIcon>
                Add Task
              </ListItem>
          </List>
        </NavLink>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })} style={{marginTop: "65px"}}
      >
        <Switch>
          <Route path="/dashboard" exact>
            <Board />
          </Route> 
          <Route path="/add-task" exact>
            <AddTask />
          </Route>
          <Route>
            <Board />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
