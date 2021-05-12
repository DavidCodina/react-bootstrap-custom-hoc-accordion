import React       from 'react'; 
import Accordion   from 'react-bootstrap/Accordion';
import AwareToggle from './AwareToggle';


function Accordion1(props){
  const variant       = 'gray';
  const activeVariant = 'green';
  const variants      = { variant, activeVariant }


  return (
    <Accordion className="w-90 mx-auto mb-5" defaultActiveKey="0">
      <div className="accordion-item border-dark overflow-hidden">
        <AwareToggle eventKey="0" style={{}} {...variants} {...props}>Item 1</AwareToggle>
        <Accordion.Collapse className="accordion-collapse" eventKey="0">
          <div className="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div> 
        </Accordion.Collapse>
      </div>


      <div className="accordion-item border-dark overflow-hidden">
        <AwareToggle eventKey="1" style={{}} {...variants} {...props}>Item 2</AwareToggle>
        <Accordion.Collapse className="accordion-collapse" eventKey="1">
          <div className="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div> 
        </Accordion.Collapse>
      </div>


      <div className="accordion-item border-dark overflow-hidden">
        <AwareToggle eventKey="2" style={{}} {...variants} {...props}>Item 3</AwareToggle>
        <Accordion.Collapse className="accordion-collapse" eventKey="2">
          <div className="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div> 
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
}


export default Accordion1;