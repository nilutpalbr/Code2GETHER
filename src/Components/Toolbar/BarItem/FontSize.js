import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {SET_FONT_SIZE } from '../../../store/Action/action'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import classes from './tools.module.css'

const CustomizeFont = (props) => {

  const handleChange = (event) => {
    props.setFontSize(parseInt(event.target.value));
    // console.log(event.target.value)
  };

  return (
    <Grid style={{display:'flex',margin:'2vh 0 0 5vh'}}>
        <select className={classes.navSelect} onChange={handleChange} value={props.font}>
            <option value={20} selected>small</option>
            <option value={25}>Medium</option>
            <option value={30}>Large</option>
        </select>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    font: state.tools.fontSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFontSize: (value) => dispatch({ type:SET_FONT_SIZE, value})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CustomizeFont);
