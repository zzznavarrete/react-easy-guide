import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/badges";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

//import './styles/BadgeNew.css';

class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  // Recibe une vento, por eso la e
  handleChange = (e) => {
    //const nextForm = this.state.form;
    //nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Manejando el post
  handleSubmit = async (e) => {
    // Prevenimos el evento por defevto
    e.preventDefault();
    // Manejando el estado
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      // Esto hace que luego que esté todo correcto nos redirija a otra vista.
      this.props.history.push("/badges");
      
    } catch (ex) {
      this.setState({ loading: false, error: ex });
      console.log("BadgeEdit.js - handleSubmit - ex = ", ex);
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                // Se pasa lo insertado por el usuario o bien un valor por omisión
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "Job title"}
                email={this.state.form.email}
                avatarUrl={`https://www.gravatar.com/avatar/${this.state.email}?d=identicon"`}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
