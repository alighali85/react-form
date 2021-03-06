import React, {useState} from 'react'
import FormGenerator from './containers/formGenerator'
import AppHeader from './components/appHeader'
import { LONDON_WEATHER, APP_TITLE } from './config/header'
import {Container, Dialog, DialogTitle, Button} from '@material-ui/core'
import bugFormDataSource, { personalMessage, ratingForm } from './config/formsData.js'
import CircularProgress from '@material-ui/core/CircularProgress';


const formsSource = [
  {
    id: 1,
    title: 'Report game bug:',
    source: bugFormDataSource,
    api: 'http://www.postapi/form1',
  },
    {
    id: 2,
    title: 'Send a personal message:',
    source: personalMessage,
    api: 'http://www.postapi/form2',
  },
  {
    id: 3,
    title: 'Rate our bug reporter:',
    source: ratingForm,
    api: 'http://www.postapi/form3',
  }
]

function App({forms = formsSource}) {
  const [activeForm, setActiveForm] = useState(1)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const loadNext = (id) => {
    /**
     * use timeout to mock required request time
     */
    setLoading(false)
    if(forms.length > id) {
      setActiveForm((id+1))
      return
    }
    setActiveForm(null)
    setDone(true)
  }
  
  const handleOnSubmit = () => {
    setLoading(true)
  }

  const reset = () => {
    setLoading(false)
    setDone(false)
    setActiveForm(1)
  }
  
  return (
    <div className="App">
      <AppHeader weatherApi={LONDON_WEATHER} title={APP_TITLE}/>
      <Container>
        {forms.map(form => <div key={form.id}>
          {activeForm === form.id && <FormGenerator
          title={form.title}
          endPoint={form.api}
          id={form.id}
          source={form.source}
          onSuccess={loadNext}
          onSubmit={handleOnSubmit}
          />}
          </div>)}
      </Container>
      {(loading || done) && <div>
        <Dialog open={loading || done}>
          <DialogTitle id="simple-dialog-title">
            {done && <>
            All forms submitted!<br/>
            {' '}
           <Button
            variant="contained"
            color="secondary"
            style={{marginTop: 24}}
            onClick={reset} >
             Restart
             </Button>
            </>
            }
            { loading && <>
            Loading ...
            <CircularProgress />
            </>
            }
          </DialogTitle>
        </Dialog>
      </div>}
    </div>
  );
}

export default App;
