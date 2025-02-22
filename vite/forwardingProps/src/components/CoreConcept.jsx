import CoreConcepts from './CoreConcepts' // Importing the CoreConcepts component from the CoreConcepts.jsx file
import { CORE_CONCEPTS } from '../data'; // Importing the CORE_CONCEPTS array and Examples from the data.js file

export default function CoreConcept() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts {...conceptItem} />)}
            </ul>
        </section>
    );
}
