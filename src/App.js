import React, { Component } from 'react';
import Form from './Form/Form'
import Filter from './Filter/Filter'
import Render from './Render/RenderContactList'
import { connect } from 'react-redux'
import * as operations from './redux/Contacts/operations'



class App extends Component{
  
  
  componentDidMount() {
    this.props.fetchContacts()
    
}


  render() {
 
    return (
      <div>
        {this.props.error&&<h1>Error,please try later</h1>}
        {this.props.isLoadingTodos && <h1>Loading...</h1>}
        <h1>Phonebook</h1>
        <Form onSubmit={this.submitForm} />
         <h2>Contacts</h2>
        <Filter />
        <Render/>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: state.contacts.loading,
  error:state.contacts.error
});
const mapDispatchToProps = dispatch => ({
  fetchContacts:()=>dispatch(operations.fetchContact())
})
  


export default connect(mapStateToProps,mapDispatchToProps)(App);