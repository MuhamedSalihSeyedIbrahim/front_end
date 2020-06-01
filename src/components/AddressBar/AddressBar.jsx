import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import "./AddressBar.css";

class AddressBar extends Component {
  constructor(props) {
    super(props);

    const address = this.props.address || {};

    this.AddressInputs = [
      {
        autoComplete: "doorNo",
        name: "doorNo",
        variant: "outlined",
        type: "number",
        required: true,
        fullWidth: true,
        id: "doorNo",
        label: "Door No",
        autoFocus: true,
        value: address.doorNo || "",
      },
      {
        autoComplete: "street",
        name: "street",
        variant: "outlined",
        type: "String",
        required: true,
        fullWidth: true,
        id: "street",
        label: "Street",
        autoFocus: true,
        value: address.street || "",
      },
      {
        autoComplete: "city",
        name: "city",
        variant: "outlined",
        type: "String",
        required: true,
        fullWidth: true,
        id: "city",
        label: "City",
        autoFocus: true,
        value: address.city || "",
      },
      {
        autoComplete: "state",
        name: "state",
        variant: "outlined",
        type: "String",
        required: true,
        fullWidth: true,
        id: "state",
        label: "State",
        autoFocus: true,
        value: address.state || "",
      },
      {
        autoComplete: "country",
        name: "country",
        variant: "outlined",
        type: "String",
        required: true,
        fullWidth: true,
        id: "country",
        label: "Country",
        autoFocus: true,
        value: address.country || "",
      },
      {
        autoComplete: "zipCode",
        name: "zipCode",
        variant: "outlined",
        type: "String",
        required: true,
        fullWidth: true,
        id: "zipCode",
        label: "Zip Code",
        autoFocus: true,
        value: address.zipcode || "",
      },
    ];
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <ExpansionPanel style={{ margin: "5px auto" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {this.props.address.name}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Container maxWidth="md">
              <Box display="flex" border={1} justifyContent="center">
                <Grid container style={{ margin: "10px" }} spacing={2}>
                  {this.AddressInputs.map(
                    (
                      {
                        autoComplete,
                        name,
                        type,
                        variant,
                        required,
                        fullWidth,
                        id,
                        label,
                        value,
                      },
                      index
                    ) => (
                      <Grid item key={index} xs={6}>
                        <TextField
                          variant={variant}
                          required={required}
                          fullWidth={fullWidth}
                          id={`${this.props.address.name}-${id}`}
                          label={label}
                          type={type}
                          name={name}
                          autoComplete={autoComplete}
                          defaultValue={value}
                          onChange={this.props.updateAddressData}
                        />
                      </Grid>
                    )
                  )}
                  <Button
                    type="submit"
                    style={{ marginLeft: "5px" }}
                    variant="contained"
                    color="primary"
                    onClick={this.props.removeAddressBar}
                  >
                    Delete Address
                  </Button>
                </Grid>
              </Box>
            </Container>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}

export default AddressBar;
