import React from 'react'; 
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const accordionButttonStyle = {
  display: 'flex',
  position: 'relative',
  width: '100%',
  alignItems: 'center',
  marginBottom: 0,
  padding: '1rem 1.25rem',
  fontSize: '1rem',
  color: '#FFF',
  fontWeight: 'bold',
  textAlign: 'left',
  border: 0, 
  borderRadius: 0,
  overflowAnchor: 'none',
  transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease'
};

//! The current Bootstrap Sass customizations do not include primary or secondary as theme colors.
//! That said, it still seemed best to use them as defaults (i.e., for other projects).

function AwareToggle({ accordionIsOpen, currentKey, eventKey, callback, variant = 'secondary', activeVariant = 'primary', style = {}, children }){
  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));

  
  const setClasses = () => {
    if (accordionIsOpen && currentKey === eventKey){
      return `btn btn-${activeVariant} active`;
    } else if (accordionIsOpen && currentKey !== eventKey){
      return `btn btn-${variant}`;
    } else if (!accordionIsOpen){
      return `btn btn-${variant}`;
    } 
    return `btn btn-${variant}`;
  };


  return (
    <button 
      className={setClasses()}
      style={{ ...accordionButttonStyle, ...style }} 
      type="button" 
      onClick={decoratedOnClick}
    >
      { children }
    </button>
  );
}


export default AwareToggle;