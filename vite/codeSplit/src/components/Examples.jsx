import TabButton from './TabButton'; // Importing the TabButton component from the TabButton.jsx file
import { EXAMPLES } from '../data'; // Importing the CORE_CONCEPTS array and Examples from the data.js file
import { useState } from 'react'; // Importing the useState hook from the react package to manage the state of the app component

export default function Examples() {
// selectedTopic : state variable to store the selected Topic value
  // setSelectedTopic : function to update the selected Topic value
  // useState('Please click a button') : initial value of the selectedTopic state variable
  const [selectedTopic, setSelectedTopic] = useState('');

    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} >Component</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {tabContent}
        </section>
    );
}
