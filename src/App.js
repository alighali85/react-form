import React from 'react';
import SupportForm from './containers/suportForm/SupportForm';
import AppHeader from './components/appHeader'
import { LONDON_WEATHER, APP_TITLE } from './config/main';
import {Container, Grid} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <AppHeader weatherApi={LONDON_WEATHER} title={APP_TITLE}/>
      <Container>
        <Grid container>
          <SupportForm/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
