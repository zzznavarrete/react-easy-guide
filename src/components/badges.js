import React from 'react';
import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css";

class Badge extends React.Component{



  

    render(){

        

        return (
        
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img 
                    className="Badge__avatar"
                    src={this.props.avatarURL}
                    alt="Avatar"
                />
                <h3>{this.props.firstName} <br/>{this.props.lastName}</h3>
            </div>

            <div className="Badge__section-info">
                <p>{this.props.jobTitle}</p>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="Badge__footer">#platzi</div>
        </div>

        );
    }

}

// Siempre se debe exportar el componente
export default Badge;