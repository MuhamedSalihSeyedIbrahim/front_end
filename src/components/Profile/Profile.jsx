import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddressBar from "../../components/AddressBar/AddressBar";
import { withStyles } from "@material-ui/core/styles";

import "./Profile.css";

const useStyles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [
        {
          name: `ADDRESS - ${1}`,
        },
      ],
    };
  }
  addAddressBar(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      address: [
        ...prevState.address,
        { name: `ADDRESS - ${prevState.address.length + 1}` },
      ],
    }));
  }

  removeAddressBar(ChildName, event) {
    event.preventDefault();
    const address = this.state.address.filter(
      ({ name }) => !(name === ChildName)
    );
    this.setState((prevState) => ({
      ...prevState,
      address: address,
    }));
  }

  updateAddressData(ChildName, event) {
    let address = this.state.address.find(({ name }) => name === ChildName);
    address[event.target.name] = event.target.value;
  }

  handleSubmit(event) {
    let { firstName, lastName, email, password } = event.target;
    let signUpDate = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      address: this.state.address,
    };

    console.log(signUpDate);
    event.preventDefault();
  }

  addressBarUI() {
    return this.state.address.map((address, index) => (
      <AddressBar
        key={index}
        address={address}
        removeAddressBar={this.removeAddressBar.bind(this, address.name)}
        updateAddressData={this.updateAddressData.bind(this, address.name)}
      />
    ));
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              lineHeight="normal"
              m={1}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                component="div"
                style={{ display: "flex", alignItems: "center" }}
              >
                Address:{" "}
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.addAddressBar.bind(this)}
              >
                Add Address
              </Button>
            </Box>

            {this.addressBarUI()}
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
         {this.props.updateButtonName}
        </Button>
      </form>
    );
  }
}

export default withStyles(useStyles)(Profile);
