
export default function TabButton({ children, onSelect, isSelected }) {
    
    return (
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    );
}

// Via the Lable Prop
/* export default function TabButton({ lebel }) {
    return (
      <li><button>{lebel}</button></li>
    );
}*/
