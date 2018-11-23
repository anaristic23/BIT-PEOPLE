import React from 'react';


const Search = (props) => {
    const onInputChange = (event) => {
        props.searchUsers(event.target.value);
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input
                            type="search"
                            onChange={onInputChange}
                            required
                            placeholder="Search users"
                        />
                        <label className="label-icon" for="search"><i class="material-icons" >search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )

}

export { Search }