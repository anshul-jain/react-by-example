import headerImg from './assets/react-core-concepts.png';
/*import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';*/
import { CORE_CONCEPTS } from './data'; // Importing the CORE_CONCEPTS array from the data.js file


const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential'];

// Function to generate a random integer between 0 and the max value
function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[generateRandomInt(3)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({ image, title, description }) { // Destructuring the props object to get the image, title, and description properties
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
      </main>
    </div>
  );
}

export default App;
