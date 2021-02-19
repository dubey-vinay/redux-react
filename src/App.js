import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // react-script takes care of the extension with the file

class App extends Component {
  state = {
    person: [
      {name: 'Vinay', age: '26'},
      {name: 'Chetna', age: '26'}
    ],
    isDisplayVisible: false
  }

  switchName = () => {
    this.setState({
      person: [
        {name: 'Vinay Dubey', age: '26'},
        {name: 'Chetna Singh', age: '26'}
      ]      
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      person: [
        {name: event.target.value, age: '26'},
        {name: 'Chetna Singh', age: '26'}
      ]
    })
  }

  toggleDisplayhandler = (event) => {
    this.setState({
      isDisplayVisible: !this.state.isDisplayVisible
    })
  }

  render() {
    const buttonStyle = {
      backgrooundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px',
      width: '150px',
    }

    return (
      <div className="App">
        <div>
          <h1>Hello React World</h1>
          <button onClick={this.toggleDisplayhandler} style={buttonStyle} >TOGGLE DISPLAY</button>
          { this.state.isDisplayVisible && <div>
            <button onClick={this.switchName} style={buttonStyle} >CHANGE NAME</button>
            <Person name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name} age={this.state.person[1].age} />
            <Person name={this.state.person[0].name} age={this.state.person[0].age} 
              changed = {this.changeNameHandler}
            >
              Sleeping is my best hobby
            </Person>
          </div>}
        </div>
      </div>
    );
    }

  // the above code is converted into below code by react scripts
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React World')) // and so on
}

export default App;

/* Note: 
1) A component is basically a function returning jsx eg: <h1>, <div>, etc. Here jsx means react created element which looks like html but is actually react element.
2) Always import components with starting capital letter like Person as react reserves small case compoent for native html conversion.
3) Passing anything between a component will be accessible in that component as props.children property
   eg: <Person name='Vinay' age='26'>Sleeping is my best hobby</Person> where inside person component you can call props.children to access the message between <Person>
4) Don't directly set values to state object instead use setState() method which is provided by Component class when we extend it.
5) setState allows to update a single property in a state without updating other properties in the state but useState will override everything inside it state property
    and this is the reason one has to maintain multiple state in react hooks to update state in order to prevent data loss in single state
6) In case of passing an argument to a function passed as prop one can use following two ways:
    () => this.handlerName(agr1, arg2...) 
    or
    this.handlerName().bind(this, arg1, arg2)
7) Webpack automatically injects all the css file into index.html file when we import it.
8) Inline style is a js object which only takes string type eg: borderRadius: '2' or marginTop: '10px'.
9)
*/