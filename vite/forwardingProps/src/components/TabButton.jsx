
export default function TabButton({ children, isSelected, ...props }) {
    
    return (
        <li><button className={isSelected ? 'active' : undefined} {...props}>{children}</button></li>
    );
}

// Via the Lable Prop
/* export default function TabButton({ lebel }) {
    return (
      <li><button>{lebel}</button></li>
    );
}*/
