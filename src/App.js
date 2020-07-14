import React from 'react';
import SupportForm from './containers/suportForm/SupportForm';
import AppHeader from './components/appHeader'
import { LONDON_WEATHER, APP_TITLE } from './config/main';

function App() {
  return (
    <div className="App">
      <AppHeader weatherApi={LONDON_WEATHER} title={APP_TITLE}/>
      <Container>
      <SupportForm/>
    </div>
  );
}

export default App;
