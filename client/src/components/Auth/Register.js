import React, {Component} from 'react'
import {Paper} from "@material-ui/core";
import TextFiled from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from "@material-ui/core/styles";

const styles = {
  textField: {
    width: '100%',
    marginBottom: 5
  },
  btnBlock: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20
  }
}

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      login: '',
      password: '',
      password2: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit (e) {
    e.preventDefault()
    const userData = {
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(userData)
  }

  render() {
    const {classes} = this.props;
    return (
        <Paper style={{ padding: 15}}>
          <form onSubmit={this.handleSubmit}>
            <TextFiled
                label="Email"
                type="email"
                name="email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
            />
            <TextFiled
                label="Login"
                type="text"
                name="login"
                value={this.state.login}
                onChange={this.handleChange}
                className={classes.textField}
            />
            <TextFiled
                label="Password"
                type="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={classes.textField}
            />
            <TextFiled
                label="Repeat Password"
                type="Password"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                className={classes.textField}
            />
            <div className={classes.btnBlock}>
              <Button variant="outlined" type="summit">
                Summit
              </Button>
            </div>
          </form>
        </Paper>
    )
  }
};

export default withStyles(styles)(Register)
