import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // react-script takes care of the extension with the file
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${ props => props.alt ? 'red' : 'green'};
      color: #fff;
      font: inherit;
      border: 1px solid #eee;
      padding: 8px;
      cursor: pointer;
      margin: 10px;
      width: 150px;
      
      &:hover {
        background-color: ${ props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }`;

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
    let persons = (<div>Nothing to display!</div>);

    if(this.state.isDisplayVisible) {
      persons = (
        <div>
          <StyledButton onClick={this.switchName} alt={ this.state.isDisplayVisible }>CHANGE NAME</StyledButton>
          { this.state.person.map((perPerson, index) => (
              <Person name={perPerson.name} age={perPerson.age} key={index} 
              changed = {this.changeNameHandler} />
          )) }
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          <h1>Hello React World</h1>
          <StyledButton onClick={this.toggleDisplayhandler} alt={ this.state.isDisplayVisible }>TOGGLE DISPLAY</StyledButton>
          { persons }
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
9) All the styles in css are global to your react components. This creates a problem when you have to use seperate css for different
    component as all the css files are applies to all the component regardless of their location. So in order to eliminate this issue
    we can use inline style, but one cannot use mediquery and sudo selectors like :Hover inside it. So for the solution we can use 
    "Radium". Radium is an NPM package which act as a higher order component and will provide all the missing css features which are not
    available in inline css.
10) In order to use mediaQuery in inline style, Radium provides a component call StyleRoot which will wrap your root component. 
11) Sudo selector or sudo class is the special kind of properties that will allow user to have a different properties like 
    :hover, :active, etc
12) Styled components are components which is being passed returned as component by react and it is basically has all the properties
    of whatever element we are using like styled.div, styled.button, etc.
13) On can dynimically pass any value he wants to the styled component as any attribute name of its choice and that will be received as
    a prop to the styled component that you can use for dynamic style creation (check alt attribute in StyledButton).
*/
