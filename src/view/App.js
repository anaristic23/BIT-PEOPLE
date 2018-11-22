import React, { Fragment, Component } from 'react';
// import PropTypes from 'prop-types'

import './App.css';
import { UsersList } from './users/UsersList';
import { UserCardItem } from './users/UserCardItem';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
// import { UserListItem } from './users/UserListItem';
import { fetchUsersData } from '../services/UserService'
// import { loadUsersData } from '../services/UserService';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isGrid: true,
      users: []

    }
  }

  componentDidMount() {
    fetchUsersData()
      .then(usersArray => {
        this.setState({ users: usersArray })
      });
  }

  onChangeViewMode = () => {
    this.setState(prevState => ({ isGrid: !prevState.isGrid }));
  }

  render() {


    return (
      < Fragment >

        <Header onGridChange={this.onChangeViewMode} />

        {/* <input type="button" value="click" onClick={this.onChangeViewMode} /> */}

        < main className="App" >

          <UsersList listOfUsers={this.state.users} isGrid={this.state.isGrid} />
        </main >
        <footer className="App-footer">
          <Footer />
        </footer>
      </Fragment>
    );
  }
}

export default App;
