import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




function TopBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (section) => {
    setAnchorEl(null);
    props.changeSection(section);
    console.log(section);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="build" onClick={handleClick}>
          <MenuIcon/>
          
            
          </IconButton>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleClose('start')}>  Reset  </MenuItem>
              <Divider/>
              <MenuItem onClick={() => handleClose('section7')}>First set general interventions</MenuItem>
              <MenuItem onClick={() => handleClose('sectionI')}>Indirect supporting interventions </MenuItem>
              <Divider/>
              <MenuItem onClick={() => handleClose('section11')}>The Fast Lane</MenuItem>
              <MenuItem onClick={() => handleClose('section12')}>The Circus Lane</MenuItem>
              <MenuItem onClick={() => handleClose('section13')}>The Cloister Lane</MenuItem>
              <Divider/>
              <MenuItem onClick={() => handleClose('section14')}>Interim evaluation of the MPI</MenuItem>
              <MenuItem onClick={() => handleClose('section15')}>Interventions leading to trust</MenuItem> 
              <MenuItem onClick={() => handleClose('section17')}>Supplemental general interventions</MenuItem> 
              
              <Divider/>            
              <MenuItem onClick={() => handleClose('section16')}>Initiation interventions (A-C)</MenuItem>
              <MenuItem onClick={() => handleClose('section18')}>Initiation interventions (D-F)</MenuItem>
              <MenuItem onClick={() => handleClose('section19')}>Identification interventions </MenuItem>
              <MenuItem onClick={() => handleClose('section20')}>Exchange interventions </MenuItem>
              <MenuItem onClick={() => handleClose('section21')}>Reflection interventions </MenuItem>
              <MenuItem onClick={() => handleClose('section22')}>Conversion interventions </MenuItem>
            </Menu>
          <Typography align="left" variant="h6" className={classes.title}>
            How to find the right intervention for the next step?
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default TopBar; 