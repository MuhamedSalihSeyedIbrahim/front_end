/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import * as moment from "moment";
import * as uuid from "uuid/v4";

import "./StockForm.css";

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
  content: {
    margin: "auto",
  },
});

class StockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",

      weights: [
        { weights: "", weightedTakenOnDate: moment().format("YYYY-MM-DD") },
      ],
      vaccines: [
        {
          vaccineName: "",
          dueDate: moment().format("YYYY-MM-DD"),
          interval: "",
        },
      ],
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let {
      name,
      age,
      type,
      breed,
      soldAmount,
      targetedWeight,
      category,
      insuranceStatus,
      source,
      parentMale,
      parentFemale,
    } = event.target;
    let farmData = {
      name: name.value,
      age: age.value,
      type: type.value,
      breed: breed.value,
      gender: this.state.gender,
      soldAmount: soldAmount.value,
      targeted: targetedWeight.value,
      category: category.value,
      insurance: insuranceStatus.value,
      source: source.value,
      parent: {
        male: parentMale.value,
        female: parentFemale.value,
      },
      vaccines: [...this.state.vaccines],
      weights: [...this.state.weights],
    };
    console.log(farmData);
  }

  addWeightHandle(event) {
    this.setState({
      ...this.state,
      weights: [
        ...this.state.weights,
        { weights: "", weightedTakenOnDate: moment().format("YYYY-MM-DD") },
      ],
    });
    event.preventDefault();
    event.stopPropagation();
  }

  handleDownDrop(callerType, event) {
    if (callerType === "GENDER") {
      this.setState({ ...this.state, gender: event.target.value });
    } else {
      const id = parseInt(callerType.split("-").pop());
      let vaccineData = [...this.state.vaccines];
      vaccineData[id]["interval"] = event.target.value;
      this.setState({ ...this.state, vaccines: [...vaccineData] });
    }
  }

  addVaccineHandle(event) {
    this.setState({
      ...this.state,
      vaccines: [
        ...this.state.vaccines,
        {
          vaccineName: "",
          dueDate: moment().format("YYYY-MM-DD"),
          interval: "",
        },
      ],
    });
    event.preventDefault();
    event.stopPropagation();
  }

  removeVaccine(vaccinceId, event) {
    const vaccines = [...this.state.vaccines];
    vaccines.splice(vaccinceId, 1);
    this.setState({ vaccines });

    event.preventDefault();
    event.stopPropagation();
  }

  removeWeight(weightId, event) {
    const weights = [...this.state.weights];
    weights.splice(weightId, 1);
    this.setState({ weights });

    event.preventDefault();
    event.stopPropagation();
  }
  vaccineNameHandle(event) {
    const { name, value } = event.target;
    const index = parseInt(name.split("-").pop());

    this.state.vaccines[index]["vaccineName"] = value;
  }

  vaccineDueDateHandle(event) {
    const { name, value } = event.target;
    const index = parseInt(name.split("-").pop());
    this.state.vaccines[index].dueDate = value;
  }

  weightTakenOnDateHandle(event) {
    const { name, value } = event.target;
    const index = parseInt(name.split("-").pop());

    this.state.weights[index].weightedTakenOnDate = value;
  }

  weightHandle(event) {
    const { name, value } = event.target;
    const index = parseInt(name.split("-").pop());
    this.state.weights[index].weights = value;
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoComplete="name"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="age"
              label="Age"
              id="age"
              type="Number"
              autoComplete="age"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="type"
              label="Type"
              id="type"
              autoComplete="type"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="breed"
              label="Breed"
              id="breed"
              autoComplete="breed"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl
              style={{ width: "100%" }}
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Gender
              </InputLabel>
              <Select
                native
                defaultValue={this.state.gender}
                onChange={this.handleDownDrop.bind(this, "GENDER")}
                label="Gender"
                inputProps={{
                  name: "Gender",
                  id: "outlined-Gender-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="targetedWeight"
              label="Targeted Weight"
              id="targetedWeight"
              autoComplete="targetedWeight"
              type="Number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KG</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="category"
              label="Category"
              id="category"
              autoComplete="category"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="cost"
              label="Cost"
              id="cost"
              type="Number"
              autoComplete="cost"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="insuranceStatus"
              label="Insurance Status"
              id="insuranceStatus"
              autoComplete="insuranceStatus"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="source"
              label="Source"
              id="source"
              autoComplete="source"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              defaultValue={this.state.soldAmount}
              name="soldAmount"
              label="Sold Amount"
              id="soldAmount"
              type="Number"
              autoComplete="soldAmount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="parentMale"
              label="Parent Male"
              id="parentMale"
              autoComplete="parentMale"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="parentFemale"
              label="Parent Female"
              id="parentFemale"
              autoComplete="parentFemale"
            />
          </Grid>

          <Grid item xs={12}>
            <ExpansionPanel style={{ margin: "2px auto", width: "100%" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{ content: classes.content }}
              >
                <Typography
                  variant="subtitle2"
                  component="h2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  WEIGHT
                </Typography>
                <IconButton
                  onClick={this.addWeightHandle.bind(this)}
                  aria-label="delete"
                  style={{ display: "flex", marginLeft: "auto" }}
                  color="primary"
                >
                  <Icon>add_circle</Icon>
                </IconButton>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container maxWidth="md">
                  {this.state.weights.map((weight, index) => (
                    <div style={{ marginTop: "3px" }} key={uuid()}>
                      <Box
                        display="flex"
                        border={1}
                        borderColor={"#00000024"}
                        borderRadius={"1%"}
                        justifyContent="center"
                      >
                        <Grid container style={{ margin: "5px" }} spacing={2}>
                          <Grid item xs={12} sm={4}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              name={`weight-${index}`}
                              label="weight"
                              id="weight"
                              autoComplete="weight"
                              type="Number"
                              onChange={this.weightHandle.bind(this)}
                              defaultValue={this.state.weights[index].weights}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    KG
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <TextField
                              style={{ width: "100%" }}
                              id="weightedTakenOnDate"
                              label="weights on Date"
                              name={`weightedTakenOnDate-${index}`}
                              type="date"
                              onChange={this.weightTakenOnDateHandle.bind(this)}
                              defaultValue={
                                this.state.weights[index].weightedTakenOnDate
                              }
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            style={{ alignSelf: "center" }}
                          >
                            <Button
                              type="submit"
                              style={{ marginLeft: "auto", display: "flex" }}
                              variant="contained"
                              color="primary"
                              onClick={this.removeWeight.bind(this, index)}
                            >
                              Delete Address
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </div>
                  ))}
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>

          <Grid item xs={12}>
            <ExpansionPanel style={{ margin: "5px auto", width: "100%" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{ content: classes.content }}
              >
                <Typography
                  variant="subtitle2"
                  component="h2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  VACCINE
                </Typography>
                <IconButton
                  onClick={this.addVaccineHandle.bind(this)}
                  aria-label="delete"
                  style={{ display: "flex", marginLeft: "auto" }}
                  color="primary"
                >
                  <Icon>add_circle</Icon>
                </IconButton>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container maxWidth="md">
                  {this.state.vaccines.map((vaccine, index) => (
                    <div style={{ marginTop: "3px" }} key={uuid()}>
                      <Box
                        display="flex"
                        border={1}
                        borderColor={"#00000024"}
                        borderRadius={"1%"}
                        justifyContent="center"
                      >
                        <Grid container style={{ margin: "5px" }} spacing={2}>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              defaultValue={
                                this.state.vaccines[index].vaccineName
                              }
                              onChange={this.vaccineNameHandle.bind(this)}
                              name={`vaccineName-${index}`}
                              label="vaccine Name"
                              id={`vaccineName-${index}`}
                              autoComplete="vaccineName"
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              style={{ width: "100%" }}
                              id={`dueDate-${index}`}
                              name={`dueDate-${index}`}
                              label="Due Date"
                              type="date"
                              onChange={this.vaccineDueDateHandle.bind(this)}
                              defaultValue={this.state.vaccines[index].dueDate}
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControl
                              style={{ width: "100%" }}
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <InputLabel htmlFor="outlined-age-native-simple">
                                Interval
                              </InputLabel>
                              <Select
                                native
                                defaultValue={
                                  this.state.vaccines[index].interval
                                }
                                onChange={this.handleDownDrop.bind(
                                  this,
                                  `vaccineInterval-${index}`
                                )}
                                label="Interval"
                                inputProps={{
                                  name: "Interval",
                                  id: "outlined-Interval-native-simple",
                                }}
                              >
                                <option aria-label="None" value="" />
                                <option value="ONCE">Once</option>
                                <option value="MONTHLY">Monthly</option>
                                <option value="QUARTERLY">Quarterly</option>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={3}
                            style={{ alignSelf: "center" }}
                          >
                            <Button
                              type="submit"
                              style={{ marginLeft: "auto", display: "flex" }}
                              variant="contained"
                              color="primary"
                              onClick={this.removeVaccine.bind(this, index)}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </div>
                  ))}
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
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

export default withStyles(useStyles)(StockForm);
