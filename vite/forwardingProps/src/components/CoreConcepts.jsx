export default function CoreConcepts({ image, title, description }) { // Destructuring the props object to get the image, title, and description properties
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
