export default function Tabs({ children, buttons, ButtonsContainer }) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}

// With the defualt values for the props
// With this code you do not required to pass the ButtonsContainer="menu" props in the Tabs.jsx file.

/*
export default function Tabs({ children, buttons, ButtonsContainer='menu' }) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}*/