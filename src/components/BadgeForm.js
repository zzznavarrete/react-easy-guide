import React from 'react';


class BadgeForm extends React.Component{

    // Inicializando el estado
    state = {};

    handleClick = (e) => {
        console.log('Button was clicked'); 
    }

    handleSubmit = (e) => {
        // Previene que el botón se envíe.
        e.preventDefault();
    }


    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First name</label>
                        <input 
                         onChange={this.props.onChange}
                         className="form-control" 
                         type="text" 
                         name="firstName"
                         value={this.props.formValues.firstName || ""}
                          />  
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last name</label>
                        <input onChange={this.props.onChange}
                         className="form-control" 
                         type="text" 
                         name="lastName"
                         value={this.props.formValues.lastName  || ""}
                          />  
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.onChange}
                         className="form-control" 
                         type="email" 
                         name="email"
                         value={this.props.formValues.email || ""}
                          />  
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job title</label>
                        <input onChange={this.props.onChange}
                         className="form-control" 
                         type="text" 
                         name="jobTitle"
                         value={this.props.formValues.jobTitle || ""}
                          />  
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input onChange={this.props.onChange}
                         className="form-control" 
                         type="text" 
                         name="twitter"
                         value={this.props.formValues.twitter || ""}
                          />  
                    </div>
                    <button onClick={this.handleClick}  className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;