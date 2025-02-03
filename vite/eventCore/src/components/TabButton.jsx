
export default function TabButton({ children, onSelect }) {
    
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}

// Via the Lable Prop
/* export default function TabButton({ lebel }) {
    return (
      <li><button>{lebel}</button></li>
    );
}*/