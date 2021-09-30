import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => console.log('')}
          edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
