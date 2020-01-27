import React, { Component } from "react";
import TextInput from "./inputGroup/TextInput";
import EmailInput from "./inputGroup/EmailInput";
import OcupationSelect from "./inputGroup/OcuSelect";
import StatusSelect from "./inputGroup/StatusSelect";
import InternatStatus from "./inputGroup/InternalStatus";

class UserForm extends Component {
  state = {
    first_name: "",
    email: "",
    ocupation: "",
    status: "",
    internal_status: "",
    errors: false,
    content: []
  };

  formdata = {
    fields: [
      {
        type: "info_html",
        content: "<h3>Please fill up the following form</h3>"
      },
      {
        name: "first_name",
        type: "text",
        label: "First Name",
        placeholder: "First Name",
        required: true,
        validation_message: "First name is required"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email",
        required: true,
        validation_message: "Email is required"
      },
      {
        name: "ocupation",
        type: "multi-select",
        label: "Ocupation",
        placeholder: "Select Ocupation",
        required: true,
        validation_message: "Ocupation is required",
        options: [
          {
            doctor: "Doctor",
            engineer: "Engineer",
            teacher: "Teacher",
            other: "Other"
          }
        ]
      },
      {
        name: "status",
        type: "radio",
        label: "Status",
        required: true,
        validation_message: "Status is required",
        options: [
          {
            valid: "Valid",
            invalid: "Invalid"
          }
        ]
      },
      {
        name: "internal_status",
        type: "select",
        label: "Internal Status",
        required: true,
        validation_message: "Internal Status is required",
        options: [
          {
            valid: "Valid",
            invalid: "Invalid"
          }
        ]
      }
    ]
  };
  textHandleChange = e => {
    this.setState({
      first_name: e.target.value
    });
  };

  emailHandleChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  selectHandleChange = e => {
    this.setState({
      ocupation: e.target.value
    });
  };

  selectIntHandleChange = e => {
    this.setState({
      internal_status: e.target.value
    });
  };

  radioHandleChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.first_name !== "" &&
      this.state.email !== "" &&
      this.state.ocupation !== "" &&
      this.state.status !== "" &&
      this.state.internal_status !== ""
    ) {
      let content = {
        first_name: this.state.first_name,
        email: this.state.email,
        ocupation: this.state.ocupation,
        status: this.state.status,
        internal_status: this.state.internal_status,
        ...this.state
      };
      content = [...this.state.content, content];
      this.setState({
        content
        //errors: false
      });
    } else {
      this.setState({
        // content: this.state,
        errors: true
      });
    }
    this.setState({
      first_name: "",
      email: "",
      ocupation: "",
      status: "",
      internal_status: ""
    });
    document.getElementById("myForm").reset();
  };

  render() {
    console.log(this.state.errors);
    // console.log(this.state.name);
    const tableItem = this.state.content.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.first_name}</td>
          <td>{item.email}</td>
          <td>{item.ocupation}</td>
          <td>{item.status}</td>
          <td>{item.internal_status}</td>
        </tr>
      );
    });

    // Passing props for text field

    let showText =
      this.formdata.fields !== 0
        ? this.formdata.fields.filter(items => {
            return items.type === "text";
          })
        : "";

    // Passing props for email field
    let showEmail =
      this.formdata.fields !== 0
        ? this.formdata.fields.filter(items => {
            return items.type === "email";
          })
        : "";

    // Passing props for multi select fields
    let showOccu =
      this.formdata.fields !== 0
        ? this.formdata.fields.filter(items => {
            return items.type === "multi-select";
          })
        : "";

    let newShowOccu =
      this.formdata.fields !== 0
        ? showOccu.map(newOccu => {
            return newOccu.options[0];
          })
        : "";

    // Passing props for radio field
    let showStats =
      this.formdata.fields !== 0
        ? this.formdata.fields.filter(items => {
            return items.type === "radio";
          })
        : "";

    let newShowStat =
      this.formdata.fields !== 0
        ? showStats.map(status => {
            return status.options[0];
          })
        : "";

    // Passing props for select fields
    let showInter =
      this.formdata.fields !== 0
        ? this.formdata.fields.filter(items => {
            return items.type === "select";
          })
        : "";

    let newShowInter =
      this.formdata.fields !== 0
        ? showInter.map(newInter => {
            return newInter.options[0];
          })
        : "";

    return (
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <h2>
                {this.formdata.fields.length !== 0
                  ? this.formdata.fields[0].content.replace(/(<([^>]+)>)/gi, "")
                  : ""}
              </h2>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit} id="myForm">
                <TextInput
                  showText={showText}
                  value={this.state.first_name}
                  handleTextInput={this.textHandleChange}
                  errors={this.state.errors}
                />
                <EmailInput
                  showEmail={showEmail}
                  value={this.state.email}
                  handleEmailInput={this.emailHandleChange}
                  errors={this.state.errors}
                />

                <OcupationSelect
                  showOccu={showOccu}
                  options={newShowOccu}
                  value={this.state.ocupation}
                  handleSelect={this.selectHandleChange}
                  errors={this.state.errors}
                />

                <StatusSelect
                  showStat={showStats}
                  options={newShowStat}
                  handleRadio={this.radioHandleChange}
                  errors={this.state.errors}
                  value={this.state.status}
                />

                <InternatStatus
                  showInter={showInter}
                  options={newShowInter}
                  value={this.state.ocupation}
                  handleIntSelect={this.selectIntHandleChange}
                  errors={this.state.errors}
                />

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <h2 className="text-center my-5">Persons Details</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Email</th>
                <th scope="col">Ocupation</th>
                <th scope="col">Status</th>
                <th scope="col">Internal Status</th>
              </tr>
            </thead>
            <tbody>{tableItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserForm;
