import React, { useState, useEffect }  from 'react';


function AwareAccordion({ Accordion }){
  const [ currentKey,      setCurrentKey      ] = useState('0');
  const [ previousKey,     setPreviousKey     ] = useState(null);
  const [ accordionIsOpen, setAccordionIsOpen ] = useState(true);
  // This is a hack to get the useEffect to run even when 
  // previousKey and currentKey do not change.
  const [ clickCount,    setClickCount ] = useState(0);
  
  const callback = (eventKey) => {
    setPreviousKey(currentKey);
    setCurrentKey(eventKey);
    setClickCount(currentCount => currentCount + 1);
  };


  const stateAsProps = { accordionIsOpen, currentKey, callback };


  useEffect(() => {
    if (previousKey === currentKey && accordionIsOpen){
      setAccordionIsOpen(false);
      // console.log("Closing.");
    } else {
      setAccordionIsOpen(true);
      // console.log("Opening.");
    } 
    // Do not add in other dependencies.
  }, [previousKey, currentKey, clickCount]); // eslint-disable-line react-hooks/exhaustive-deps


  return <Accordion {...stateAsProps} />;
}


export default AwareAccordion;