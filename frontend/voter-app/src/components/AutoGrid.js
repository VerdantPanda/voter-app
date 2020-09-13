import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OrgCard from "./orgCard";
import Bounce from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid(props) {
  const classes = useStyles();
  var gridItemsList = [];
  gridItemsList = props.cardList.map((card) => (
    <Grid item xs>
      {card}
    </Grid>
  ));
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {gridItemsList[0]}
        {gridItemsList[1]}
        {gridItemsList[2]}
      </Grid>
      <Grid container spacing={3}>
        {gridItemsList[3]}
        {gridItemsList[4]}
        {gridItemsList[5]}
      </Grid>
      <Grid container spacing={3}>
        {gridItemsList[6]}
        {gridItemsList[7]}
        {gridItemsList[8]}
      </Grid>
      <Grid container spacing={3}>
        {gridItemsList[9]}
        {gridItemsList[10]}
        {gridItemsList[11]}
      </Grid>
      <Grid container spacing={3}>
        {gridItemsList[12]}
        {gridItemsList[13]}
        {gridItemsList[14]}
      </Grid>
      <Grid container spacing={3}>
        {gridItemsList[15]}
        {gridItemsList[16]}
        {gridItemsList[17]}
      </Grid>
      <Grid container spacing={3}>
        {gridItemsList[18]}
        {gridItemsList[19]}
        {gridItemsList[20]}
      </Grid>
    </div>
  );
}
