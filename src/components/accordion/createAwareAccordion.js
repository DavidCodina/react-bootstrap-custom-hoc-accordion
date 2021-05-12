import React, { useState, useEffect } from 'react';


function createAwareAccordion(Accordion){
  return function(){
    const [ currentKey,      setCurrentKey      ] = useState('0');
    const [ previousKey,     setPreviousKey     ] = useState(null);
    const [ accordionIsOpen, setAccordionIsOpen ] = useState(true);
    const [ clickCount,      setClickCount      ] = useState(0);
    
    const callback = (eventKey) => {
      setPreviousKey(currentKey);
      setCurrentKey(eventKey);
      setClickCount(currentCount => currentCount + 1);
    };
  
  
    const stateAsProps = { accordionIsOpen, currentKey, callback };
  
  
    useEffect(() => {
      if (previousKey === currentKey && accordionIsOpen){
        setAccordionIsOpen(false);
      } else {
        setAccordionIsOpen(true);
      } 
      // Do not add in other dependencies.
    }, [previousKey, currentKey, clickCount]); // eslint-disable-line react-hooks/exhaustive-deps
  
  
    return <Accordion {...stateAsProps} />;
  };
}


export default createAwareAccordion;