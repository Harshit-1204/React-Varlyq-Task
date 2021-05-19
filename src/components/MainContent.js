import React from "react";
import Table from "./Table";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function MainContent() {
  return (
    <div className="main-content">
      <h3>Agent Management</h3>
      <div className="middle">
        <div>
          <h5>All(10)</h5>
        </div>
        <div>
          <FormControl variant="outlined" className="select">
            <InputLabel id="demo-simple-select-outlined-label">
              <i class="fas fa-filter"></i>By Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="By Location"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Table />
    </div>
  );
}

export default MainContent;
