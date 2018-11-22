import React from 'react';

const Header = ({ onGridChange }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="right hide-on-med-and-down">
                    <li onClick={onGridChange}><i className="material-icons">view_module</i></li>
                    <li><i className="material-icons">refresh</i></li>
                </ul>
            </div>
        </nav>
    )
}



export { Header }