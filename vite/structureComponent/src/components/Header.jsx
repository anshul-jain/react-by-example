import headerImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential'];

// Function to generate a random integer between 0 and the max value
function generateRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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
