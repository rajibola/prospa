import React from 'react';
import styles from './SignUp.module.css';
import TextInput from '../TextInput/TextInput';

export default class SignUp extends React.Component {
  state = {
    input: {
      firstName: '',
      lastName: '',
      number: '',
    },
  };

  handleText = (key, e) => {
    var input = {...this.state.input};

    input[key] = e.target.value;
    console.log('INPUT', input);
    this.setState({input});
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>Create your account</div>
        <div className={styles.description}>
          A short description about account types
        </div>

        <TextInput
          name={'First name'}
          onChange={(text) => this.handleText('firstName', text)}
          value={this.state.input.firstName}
        />
        <TextInput
          name={'Last name'}
          onChange={(text) => this.handleText('lastName', text)}
          value={this.state.input.lastName}
        />

        <span className={styles.contactContainer}>
          <select
            name='number'
            onChange={(text) => this.handleText('number', text)}
            value={this.state.input.number}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>

          <TextInput
            name={'Mobile number'}
            onChange={(text) => this.handleText('mobile', text)}
            value={this.state.input.mobile}
          />
        </span>

        <TextInput
          name={'Email address'}
          onChange={(text) => this.handleText('email', text)}
          value={this.state.input.email}
        />
      </div>
    );
  }
}