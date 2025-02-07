/*import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';*/
import { useState } from 'react'; // Importing the useState hook from the react package to manage the state of the app component
import Header from './components/Header'; // Importing the Header component from the Header.jsx file
import CoreConcepts from './components/CoreConcepts'; // Importing the CoreConcepts component from the CoreConcepts.jsx file
import TabButton from './components/TabButton'; // Importing the TabButton component from the TabButton.jsx file

import { CORE_CONCEPTS } from './data'; // Importing the CORE_CONCEPTS array from the data.js file

// Function to render the main content of the app with the Header and CoreConcepts components defined inline with the properties
/*
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              image={componentsImg}
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components." 
            />
            <CoreConcepts
              image={propsImg}
              title="JSX"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
            />
            <CoreConcepts
              image={jsxImg}
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
            />
            <CoreConcepts
              image={stateImg}
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
*/
// Function to render the main content of the app with the Header and CoreConcepts components defined using the CORE_CONCEPTS array
// Using the spread operator to pass the properties of the second object in the CORE_CONCEPTS array
function App() {
  // selectedTopic : state variable to store the selected Topic value
  // setSelectedTopic : function to update the selected Topic value
  // useState('Please click a button') : initial value of the selectedTopic state variable
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Component')} >Component</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
