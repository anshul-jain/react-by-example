import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing); // schedules a state update to true if false, or false if true
        console.log('Edit button clicked');
    }
    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={name}/>;
    }

    return (
        <li>
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
