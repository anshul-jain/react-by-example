export default function Player({ name, symbol }) {
    return (
        <li>
            <span className="player-name">{name}</span>
            <span className="player-name">{symbol}</span>
            <button>Edit</button>
        </li>
    );
}
