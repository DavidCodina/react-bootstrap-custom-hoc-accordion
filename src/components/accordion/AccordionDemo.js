import React                from 'react'; 
import AwareAccordion       from './AwareAccordion';
import Accordion1           from './Accordion1';
import createAwareAccordion from './createAwareAccordion';


const AwareAccordion1 = createAwareAccordion(Accordion1);


function AccordionDemo(){
  return (
    <main className="pb-5">
      <div className="container-fluid pt-3 px-md-5">
        <h2 className="mb-5 text-white-3d text-center">Accordion Demo</h2>

        

        <article className="article">
          <h2 className="text-white-3d">Overview:</h2>


          <p>In Bootstrap v5, the accordion no longer uses cards internally.
          This means making some tweaks to react-bootstrap v1.6.0.
          Note also that instead of using the Bootstrap v5 <code>.accordion-button</code> class,
          the button is being styled with CSS in JS (in AwareToggle.js), in addition to the following
          custom selectors in App.scss</p>


          <pre><code>{`
  .accordion-item button:focus,
  .accordion-item button:active {
    box-shadow:none !important;
  }
  
  .accordion-item button.active::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    transform: rotate(-180deg);
  }
  
  .accordion-item button::after {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform 0.2s ease-in-out;
  }
          `}</code></pre>
          
          
          <p>Unfortunately, the react-bootstrap accordion 
          is not 'self aware' out of the box. It doesn't necessarily need to be.
          That said, if you want to use the caret then it does,
          and that entails <strong><em>a lot</em></strong> of tweaks!</p>

          
          <h3 className="mb-3 text-gray">As component that accepts a component as a prop:</h3>


          <AwareAccordion Accordion={Accordion1} />


          <div class="horizontal-ruler">
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          </div>


          <h3 className="mb-3 text-gray">As HOC:</h3>


          <AwareAccordion1 />


          <p>Ultimately, it's probably just easier to build your own accordion using Bootstrap styles.
          However, it was an interesting challenge to enhance the react-bootstrap implementation.</p>
        </article>
      </div>        
    </main>
  );
}


export default AccordionDemo;