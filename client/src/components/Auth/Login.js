import React, {Component} from 'react'
import {Paper} from "@material-ui/core";
import TextFiled from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

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

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      login: '',
      password: '',
      password2: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors})
    }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit (e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(userData)
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
        <Paper style={{padding: 15}}>
          <form onSubmit={this.handleSubmit}>
            <TextFiled
                label="Email"
                type="email"
                name="email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                helperText={errors.email ? errors.email : ''}
                error={errors.email ? true : false}
            />
            <TextFiled
                label="Password"
                type="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={classes.textField}
                helperText={errors.password ? errors.password : ''}
                error={errors.password ? true : false }
            />

            <div className={classes.btnBlock}>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
    )
  }
}

export default withStyles(styles)(Login)
