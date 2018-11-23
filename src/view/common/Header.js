import React from 'react';

const Header = ({ onGridChange, isGrid, onRefresh }) => {
    const icon = isGrid ? <i className="material-icons">list</i> : <i className="material-icons">view_module</i>
    return (
        <nav>
            <div className="nav-wrapper"><a><span className="title">Bit Persons</span></a>
                <ul className="right hide-on-med-and-down">
                    <li onClick={onGridChange}><a>{icon}</a></li>
                    <li onClick={onRefresh}><a><i className="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>
    )
}



export { Header }