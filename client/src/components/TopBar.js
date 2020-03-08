import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import IconLogo from './IconLogo';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FILTER_WIDTH } from './Filter';
import FilterListIcon from '@material-ui/icons/FilterList';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  filter: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  filterIcon: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
}));

const TopBar = ({ ...props }) => {
  const classes = useStyles();

  function toggleIsMenuShown() {
    if (props.verityState.isMenuShown) {
      props.verityDispatch.setIsMenuShown(false);
    } else {
      props.verityDispatch.setIsMenuShown(true);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "transparent", width: `calc(100vw - ${FILTER_WIDTH}px` }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleIsMenuShown}>
            <MenuIcon />
          </IconButton>
          <IconLogo />
          <Typography variant="h6" className={classes.title}>
          </Typography>

          <div>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item className={classes.filter}>
                  <Typography variant="h6" > Filters </Typography>
                </Grid>
                <Grid item>
                  <FilterListIcon className={classes.filterIcon}/>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(
  //state
  state => ({
    verityState: state.verity
  }),
  //dispatch
  dispatch => ({
    verityDispatch: dispatch.verity
  })
)(TopBar);