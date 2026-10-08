import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const ReactElement = {
    type: 'a',
    props: {
        href:"https://google.com",
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>visit google</a>
)
const areactElement = React.createElement(
    'a',
    {href:'http://google.com',target:"blank"},
    'click to visit google'
)
createRoot(document.getElementById('root')).render(
    <App/> 
)
