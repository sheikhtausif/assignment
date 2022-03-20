import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as Dashboard } from '../../assets/svg/dashboard.svg'
import { ReactComponent as PhStudent } from '../../assets/svg/student.svg'
import { ReactComponent as Chat } from '../../assets/svg/chat.svg'
import { ReactComponent as People } from '../../assets/svg/people.svg'
import { ReactComponent as Payment } from '../../assets/svg/payments.svg'
import { ReactComponent as Event } from '../../assets/svg/event.svg'
import { ReactComponent as Settings } from '../../assets/svg/settings.svg'
import "./index.css"

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <Logo />
            <Dashboard />
            <PhStudent />
            <Chat />
            <People />
            <Payment />
            <Event />
            <Settings />
        </div>
    )
}

export default Sidebar