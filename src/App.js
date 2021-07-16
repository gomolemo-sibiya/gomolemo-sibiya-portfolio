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
import {
  makeStyles,
  ThemeProvider,
  withStyles,
  useTheme
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import Email from '@material-ui/icons/Email';
import GitHub from '@material-ui/icons/GitHub';
import Code from '@material-ui/icons/Code';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import LinearProgress from '@material-ui/core/LinearProgress';
import { borders } from '@material-ui/system';
import Link from '@material-ui/core/Link';

import Avatar from '@material-ui/core/Avatar';

const aboutMe1 =
  'I am a final year IT student from Tshwane University of Technology (TUT). I am currently seeking an internship to complete my Practicals, through which I may obtain my National Diploma.';
const aboutMe2 =
  'I specialized in Multimedia, where I acquired basic-to intermediate skills in Web Design, Web Development, Software Development, and Game Dev.';
const aboutMe3 =
  'Other design skills that I learnt are Video and Image Editing and Sound Design. Lastly, Data Analysis. Since 2019 I have been working on a few Project';

const job =
  'I worked for a 3 star hotel in Pretoria as a Duty Manager. I earned really well.';

const job2 = 'I worked as a programming tutor at TUT.';

const id = '980375182085';
const gender = 'Male';
const nationality = 'South African';
const lang = 'English IsiZulu';
const hobbies = 'Cycling & Debate and Public Speaking';
const myName = 'Gomolemo Sibiya';
const myTitle = 'Internship Seeker | Software & Web Developer';

let theme2 = createMuiTheme();
theme2 = responsiveFontSizes(theme2);

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: '#B2BABB',
  m: 1,
  border: 1,
  padding: 1,
  style: { width: 'fitContent', height: 'fitContent' }
};

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#0CAA80'
  }
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: theme
  },
  paperPersonalDetails: {
    fontSize: 14,
    fontWeight: 'fontWeightLight',
    textAlign: 'center',
    color: '#F7F9F9 ',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 35,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    letterSpacing: 1
  },
  paperAboutMe: {
    fontSize: 14,
    fontWeight: 'fontWeightLight',
    textAlign: 'center',
    color: '#F7F9F9 ',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 35,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    letterSpacing: 1
  },
  paperIcons: {
    height: 50,
    width: 50
  },
  titleName: {
    fontSize: 20,
    fontWeight: 'fontWeightLight',
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100
  },
  titleName1: {
    fontSize: 20,
    fontWeight: 'fontWeightLight',
    textAlign: 'center',
    color: '#F7F9F9 ',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  heading: {
    fontSize: 36,
    fontWeight: 'fontWeightLight',
    textAlign: 'center',
    color: 'white',
    padding: 10
  },
  careerHeading: {
    fontSize: 36,
    fontWeight: 'fontWeightLight',
    textAlign: 'center',
    color: '#F7F9F9',
    padding: 10,
    marginLeft: 1
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  rootCard: {
    display: 'flex'
  },
  timeline: {
    align: 'left'
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();

  function PersonalDetails() {
    return (
      <>
        <div>
          <Box className={classes.heading}>{myName}</Box>
        </div>
        <Paper square elevation={0}>
          <Box
            className={classes.titleName1}
            style={{ width: 'fitContent', background: '#0CAA80' }}
          >
            <center>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.igblade.com/platform-cache/accounts/935403/profile-picture.jpg"
                className={classes.large}
              />
            </center>
            Internship Seeker <br /> Web & Software Developer
          </Box>
        </Paper>

        <Grid item xs={12}>
          <Grid spacing={3}>
            <Paper
              elevation={0}
              style={{ background: '#424949' }}
              className={classes.paperPersonalDetails}
            >
              <Box>
                <Box style={{ color: '#F7F9F9' }}>
                  {/*white*/}
                  <span style={{ color: '#0CAA80' }}>ID Number: &nbsp;</span>
                  {id}
                  <br />
                  <span style={{ color: '#0CAA80' }}>Gender: &nbsp;</span>
                  {gender}
                  <br />
                  <span style={{ color: '#0CAA80' }}>Nationality: &nbsp;</span>
                  {nationality}
                  <br />
                  <span style={{ color: '#0CAA80' }}>Language: &nbsp;</span>
                  {lang}
                  <br />
                  <span style={{ color: '#0CAA80' }}>
                    hobbies & Interests: &nbsp;
                  </span>
                  {/*green*/}
                  {hobbies}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }

  function ContactDetails() {
    return (
      <>
        <Paper
          square
          className={classes.titleName}
          style={{ width: 'fit-content', background: '#424949' }}
        >
          <Typography>Contact Details</Typography>
        </Paper>

        <Paper
          elevation={0}
          style={{ background: '#424949', color: '#F7F9F9' }}
          className={classes.paperAboutMe}
        >
          <List style={{ fontSize: '20' }}>
            <ListItem>
              <PhoneAndroid
                style={{ color: '#0CAA80', fontSize: '50', marginRight: '10' }}
              />
              <span>012 345 6789</span>
            </ListItem>
            <ListItem>
              <Email
                style={{ color: '#0CAA80', fontSize: '50', marginRight: '10' }}
              />
              <span>gomolemosibiya@gmail.com</span>
            </ListItem>
            <ListItem>
              <GitHub
                style={{ color: '#0CAA80', fontSize: '50', marginRight: '10' }}
              />
              <span>https://github.com/gomolemo-sibiya</span>
            </ListItem>
          </List>
        </Paper>
      </>
    );
  }

  function AboutMe() {
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
            style={{ background: '#424949', textAlign: 'justify' }}
          >
            <span style={{ color: '#0CAA80', fontSize: 13 }}>
              {aboutMe1}
              <br />
              <br />
              {aboutMe2}
              <br />
              <br />
              {aboutMe3}
            </span>
          </Paper>
        </Grid>
      </>
    );
  }

  function Education() {
    return (
      <>
        <Box style={{ background: '#424949', marginTop: 1 }}>
          <Box className={classes.careerHeading}>My Career</Box>
        </Box>
        <Paper
          square
          className={classes.titleName}
          style={{ width: 'fit-content', background: '#424949', marginTop: 10 }}
        >
          <Typography>Education</Typography>
        </Paper>

        <Grid spacing={3}>
          {/* -------------------- Timeline ------------------*/}

          <Timeline align="alternate" className={classes.timeline}>
            <TimelineItem>
              <TimelineOppositeContent style={{ flex: 0.4 }}>
                <Box color="textSecondary">2012 - 2016</Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <b style={{ color: '#0CAA80' }}>High School</b>
                </Box>
                <Paper elevation={0}>
                  <Box>Pretoria Technical High School</Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent style={{ flex: 2.5 }}>
                <Box>
                  <b style={{ color: '#0CAA80' }}>Tertiary Education</b>
                </Box>
                <Paper elevation={0}>
                  <Box color="textSecondary">
                    ND: IT Multimedia {/*style={{ color: '#0CAA80' }} */}
                  </Box>
                </Paper>
                <Paper elevation={0}>
                  <Box>Tshwane University of Technology</Box>
                </Paper>
                <TimelineContent>
                  <Typography color="textSecondary" />
                </TimelineContent>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography color="textSecondary">2017 - 2020</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </>
    );
  }

  function SkillsAndKnowledge() {
    return (
      <>
        <Paper
          square
          className={classes.titleName}
          style={{ width: 'fit-content', background: '#424949' }}
        >
          <Typography>Skills & Knowledge</Typography>
        </Paper>

        <Grid spacing={3} item>
          <Paper elevation={3} className={classes.paper} color="#F7F9F9">
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                HTML <BorderLinearProgress variant="determinate" value={80} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                CSS <BorderLinearProgress variant="determinate" value={80} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                JavaScript{' '}
                <BorderLinearProgress variant="determinate" value={70} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                React.js{' '}
                <BorderLinearProgress variant="determinate" value={20} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                Node.js{' '}
                <BorderLinearProgress variant="determinate" value={25} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                PHP <BorderLinearProgress variant="determinate" value={50} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                JAVA <BorderLinearProgress variant="determinate" value={50} />
              </span>
            </div>
            <div style={{ textAlign: 'left', margin: 20 }}>
              <span>
                C++ <BorderLinearProgress variant="determinate" value={10} />
              </span>
            </div>
          </Paper>
        </Grid>
      </>
    );
  }

  function Projects() {
    return (
      <>
        <Paper
          square
          className={classes.titleName}
          style={{ width: 'fit-content', background: '#424949' }}
        >
          <Typography>Projects</Typography>
        </Paper>
        <Grid
          spacing={3}
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.details}
        >
          <Link href="https://github.com/gomolemo-sibiya">
            <GitHub
              style={{ color: '#0CAA80', marginTop: 100, fontSize: 80 }}
            />
          </Link>
          <Box
            borderRadius={16}
            {...defaultProps}
            style={{
              color: '#95A5A6',
              marginTop: 30,
              marginBottom: 100,
              fontSize: 24
            }}
          >
            See my projects by clicking on the icon above
          </Box>
        </Grid>
      </>
    );
  }

  function Experience() {
    return (
      <>
        <Paper
          square
          className={classes.titleName}
          style={{ width: 'fit-content', background: '#424949' }}
        >
          <Typography>Experience</Typography>
        </Paper>
        <Box>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent style={{ flex: 0.4 }}>
                <Box color="textSecondary">2019</Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box style={{ color: '#0CAA80' }}>
                  <b>Position: </b> Tutor
                </Box>
                <Box>{job2}</Box>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent style={{ flex: 2.4 }}>
                <Box style={{ color: '#0CAA80' }}>
                  <b>Position: </b> Duty Manager
                </Box>
                <Box>{job}</Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box color="textSecondary">2020</Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </>
    );
  }

  return (
    <div>
      <ThemeProvider>
        <Container
          maxWidth="md"
          style={{
            fontFamily: 'Poppins, sans-serif',
            background: '#EEEEEE',
            marginTop: 2
          }}
        >
          <Grid container>
            <Grid item style={{ background: '#424949' }} xs={12} md={12} lg={5}>
              <PersonalDetails />
              <ContactDetails />
              <AboutMe />
            </Grid>

            <Grid item style={{ background: '#FFF' }} xs={12} md={12} lg={7}>
              <Education />
              <Experience />
              <SkillsAndKnowledge />
              <Projects />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
