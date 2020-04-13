import React from 'react';


// argumentos/propriedades: props

function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;