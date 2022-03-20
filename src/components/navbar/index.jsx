import React from 'react'
import { ReactComponent as Notification } from '../../assets/svg/notification.svg'
import { ReactComponent as Email } from '../../assets/svg/email.svg'
import { ReactComponent as SizeSettings } from '../../assets/svg/size_settings.svg'
import profile from "../../assets/images/profile.png"
import './index.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <p className="text_dashboard">Dashboard</p>
            <div className="rightNav">
                <Notification />
                <Email />
                <SizeSettings />
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default Navbar