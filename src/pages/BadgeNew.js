import React from 'react';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/badges';
import BadgeForm from '../components/BadgeForm';

//import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    state = {
            form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
            }
    };

    // Recibe une vento, por eso la e
    handleChange = e => {
        //const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    render(){
        return (
            <React.Fragment>
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt="Logo" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName} 
                                twitter={this.state.form.twitter} 
                                jobTitle={this.state.form.jobTitle} 
                                email={this.state.form.email} 
                                avatarURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F160%2F160326.png&f=1&nofb=1"/>
                            </div>
                            <div className="col-6">
                                <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                            </div>
                        </div>
                    </div>
            </React.Fragment>

        );
    }
}

export default BadgeNew;