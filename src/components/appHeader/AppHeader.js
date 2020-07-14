import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import useWeather from './useWeather';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  weather: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function AppHeader({ weatherApi, title = 'app name' }) {
  AppHeader.testId = 'app-header-test';
  const classes = useStyles();
  const weather = useWeather(weatherApi);

  return (
    <div className={classes.root} data-testid={AppHeader.testId}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MonetizationOnIcon fontSize="large" />
          </IconButton>
          <Typography variant="h5" className={classes.title}>{title}</Typography>
          {weather ? (
            <div className={classes.weather}>
              <Button color="inherit" href="https://openweathermap.org/city/2643743">
                <span>
                  {' '}
                  {weather.city}
                </span>
              </Button>
              {!!weather.icon && <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="weather-icon" />}
              <span>
                {' '}
                {weather.tempreature}
                {' '}
                °C
              </span>
            </div>
          ) : <span>Loading ...</span>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
