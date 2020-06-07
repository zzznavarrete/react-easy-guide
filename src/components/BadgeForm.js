import React from 'react';


class BadgeForm extends React.Component{

    handleChange = (e) => {
        console.log({value : e.target.value, name: e.target.name}); 
    }

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
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />  
                    </div>
                    <button onClick={this.handleClick}  className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;