import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types'
import './App.css';
import { UsersList } from './users/UsersList';
import { UserCardItem } from './users/UserCardItem';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { Search } from './common/Search';
import { Loader } from './common/Loader';
import { About } from './users/About';
// import { UserListItem } from './users/UserListItem';
import { fetchUsersData } from '../services/UserService';
// import { loadUsersData } from '../services/UserService';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isGrid: false,
      searchText: '',
      users: [],
      load: true
    }
  }



  fetchUsers = () => {
    fetchUsersData()
      .then(usersArray => {
        this.setState({ users: usersArray, load: false })
      });

  }

  componentDidMount() {
    this.fetchUsers()
    const prevView = localStorage.getItem("isGrid") === "true" ? true : false;
    this.setState({ isGrid: prevView })
  }


  onChangeViewMode = () => {
    localStorage.setItem("isGrid", !this.state.isGrid)
    this.setState(prevState => ({ isGrid: !prevState.isGrid }));
  }

  onRefreshUsers = () => {
    this.fetchUsers()
  }

  getSearchUsers = (inputValue) => {
    this.setState({ searchText: inputValue });
  }

  render() {
    const { users, searchText } = this.state;

    const filteredUsers = users.filter(user => user.name.includes(searchText));

    return (
      < Fragment >
        <Header
          onGridChange={this.onChangeViewMode}
          isGrid={this.state.isGrid}
          onRefresh={this.onRefreshUsers}
        />

        {
          this.state.load
            ? <Loader />
            : (
              <Fragment>
                <Route exact path="/About" component={About} />
                <Search searchUsers={this.getSearchUsers} />
                < main className="App" >
                  <UsersList listOfUsers={filteredUsers} isGrid={this.state.isGrid} />}
                </main >
              </Fragment>
            )
        }

        <Footer />
      </Fragment>
    );
  }
}

export default App;
