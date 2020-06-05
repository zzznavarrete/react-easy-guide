import React from 'react';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'

//import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt="Logo" />
                    </div>
                    <container>
                        
                    </container>
            </div>

        );
    }
}

export default BadgeNew;