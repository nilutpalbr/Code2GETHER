import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { SET_THEME } from "../../../store/Action/action";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import classes from './tools.module.css'

const ThemePicker = (props) => {

  const handleChange = (event) => {
    props.setTheme(event.target.value);
  };

  return (
    <Grid style={{ display: "flex", margin: "2vh 0 0 4vh" }}>
      <select
        className={classes.navSelect}
        onChange={handleChange}
        value={props.theme}
      >
        <option value="light">light</option>
        <option value="vs-dark" selected>vs-dark</option>
        <option value="blackBoard">blackBoard</option>
        <option value="cobalt">cobalt</option>
        <option value="merbivore">merbivore</option>
        <option value="github">github</option>
      </select>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.tools.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (value) => dispatch({ type: SET_THEME, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemePicker);
