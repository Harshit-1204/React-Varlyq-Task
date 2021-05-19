import {AppBar,Button,Toolbar,Typography,InputBase,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";

function NavigationBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className="vigilant">
            <Typography variant="h6">Vigilant</Typography>
          </div>

          <Button aria-controls="simple-menu" aria-haspopup="true">
            <MenuIcon className="menu-icon" />
          </Button>
          <div className="search-box">
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              color="primary"
            />
            <div className="search-icon">
              <SearchIcon />
            </div>
          </div>
          <div className="language-icon">
            <div>
              <FormControl className="dropdown">
                <InputLabel id="demo-simple-select-label" className="english">
                  English
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Hindi</MenuItem>
                  <MenuItem value={20}>Marathi</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="account-circle">
              <AccountCircle />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
