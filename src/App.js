import React             from 'react';
import './scss/bootstrap/custom-bootstrap.scss';
import './scss/App.scss';

import AccordionDemo from './components/accordion/AccordionDemo';


function App(){  
  return (
    <main className="pb-5">
      <div className="container-fluid pt-3 px-md-5">
        <AccordionDemo />
      </div>        
    </main>
  );
}


export default App;

