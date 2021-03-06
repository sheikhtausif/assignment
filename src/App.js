import React from 'react'
import './App.css';
import SelectInput from './components/selectInput';
import ContentBar from './components/contentBar';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

const App = () => {
    return (
        <div className='app'>
            <Sidebar />
            <div className="rightDiv">
                <Navbar />
                <div className="contentDiv">
                    <ContentBar />
                    <SelectInput />
                </div>
            </div>
        </div>
    )
}

export default App