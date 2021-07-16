import React from 'react';
import './style.css';
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function About() {
  const classes = useStyles();

  function About() {
    return (
      <>
        <Paper
          square
          className={classes.titleName}
          style={{ width: 'fit-content', background: '#424949' }}
        >
          <Typography>About Me</Typography>
        </Paper>
        <Grid spacing={3}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ background: '#424949' }}
          >
            <span style={{ color: '#0CAA80', fontSize: 14, textAlign: 'left' }}>
              {aboutMe1}
              {aboutMe2}
              {aboutMe3}
            </span>
          </Paper>
        </Grid>
      </>
    );
  }
}
