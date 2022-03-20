import React from 'react'
import { ReactComponent as BackArrow } from '../../assets/svg/back_arrow.svg'
import "./index.css"

const ContentBar = () => {
    const [active, setActive] = React.useState({ one: true, two: false, three: false, four: false })

    const handleClick = (text) => {
        setActive({ one: false, two: false, three: false, four: false })
        setActive(prevState => ({ ...prevState, [text]: true }))
    }

    return (
        <div className="contentBarContainer">
            <BackArrow />
            <p className={active.one ? "active" : ""} onClick={() => handleClick("one")}>Test</p>
            <p className={active.two ? "active" : ""} onClick={() => handleClick("two")}>Lecture</p>
            <p className={active.three ? "active" : ""} onClick={() => handleClick("three")}>Study Material</p>
            <p className={active.four ? "active" : ""} onClick={() => handleClick("four")}>List of student and teacher</p>
        </div>
    )
}

export default ContentBar