import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return(e) => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    // this.props.history.replace("/");
  }

  render() {
    let { username, password } = this.state;
    let path, error = this.props.errors.map((error) => error);
    this.props.formType === 'login' ? (path = 'signup') : (path = 'login');
  
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={ username } onChange={this.update('username')} />
          <input type='password' value={ password } onChange={this.update('password')} />
          <button value='Submit'>Submit</button>
          { error }
          <Link to={`${path}`}>{ path }</Link>
        </form>
      </div>
    )
  }
}

export default SessionForm;