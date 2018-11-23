import React from 'react';


const Search = (props) => {
    const onInputChange = (event) => {
        props.searchUsers(event.target.value);
    };

    return (
        <nav>
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input
                            type="search"
                            onChange={onInputChange}
                            required
                            placeholder="Search users"
                        />
                        <label class="label-icon" for="search"><i class="material-icons" >search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )

}

export { Search }