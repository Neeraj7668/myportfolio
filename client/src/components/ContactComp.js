import React from 'react';
import "../css/index.css";

import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

class ContactComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={'contacts-contents-container'}>
                <div className={'contacts-social-container'}>
                    <a href="https://www.facebook.com/profile.php?id=100004772745550" target="_blank"><img src={facebook} className={'contact-social-img'}/></a>
                    <a href="https://twitter.com/Neeraj20688170" target="_blank"><img src={twitter} className={'contact-social-img'}/></a>
                    <a href="https://www.linkedin.com/in/neeraj-maurya-616824167/" target="_blank"><img src={linkedin} className={'contact-social-img'}/></a>
                    <a href="https://github.com/Neeraj7668" target="_blank"><img src={github} className={'contact-social-img'}/></a>
                </div>
                <div className={'contacts-footer-div'}></div>
                <p className={'contacts-footer-text'}>Copyright © 2020 all right reserved | by Neeraj</p>
            </div>
        );
    }
}

export default ContactComp;