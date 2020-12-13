// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import React from "react";
import { FormControl } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';
import { Input, InputLabel } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import '../form/ContactForm.css'


export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <Paper elevation={7} className="contactPaper">
            <Grid container>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <FormControl className="formControl">
                        <FormLabel className="formLabel">Let's Connect!</FormLabel>
                        <form
                            onSubmit={this.submitForm}
                            className="form"
                            action="https://formspree.io/f/xbjpzzee"
                            method="POST"
                        >
                            <span>
                                <label className="inputLabels">What's Your Name?</label>
                                <Input type="name" name="Name" fullWidth placeholder="Stranger" className="inputs"/>
                            </span>
                            <span>
                                <label className="inputLabels">What's Your Message?</label>                        
                                <Input type="text" name="Message" fullWidth placeholder="Feedback, New Q's" className="inputs"/>
                            </span>
                            {status === "SUCCESS" ? <p>We'll be sure to take note of your message in a timely manner. Thanks for playing our game!</p> : <Button type="submit" variant="contained" className="submitButton">Submit</Button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}