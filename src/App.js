import React from 'react'
import FormGenerator from './containers/formGenerator'
import AppHeader from './components/appHeader'
import { LONDON_WEATHER, APP_TITLE } from './config/header'
import {Container, Grid} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <AppHeader weatherApi={LONDON_WEATHER} title={APP_TITLE}/>
      <Container>
        <Grid container>
          <FormGenerator/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
