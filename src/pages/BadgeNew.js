import React from 'react';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import './styles/BadgeNew.css';
import Badge from '../components/badges';
import BadgeForm from '../components/BadgeForm';

//import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt="Logo" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge firstName="Nicolás" lastName="N. Navarrete" twitter="zzznavarrete" jobTitle="Software engineer" avatarURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F160%2F160326.png&f=1&nofb=1"/>
                            </div>
                            <div className="col-6">
                                <BadgeForm />
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}

export default BadgeNew;