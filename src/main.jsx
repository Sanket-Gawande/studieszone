import React from 'react'
import ReactDom from 'react-dom'
import "./main.css"
import App from './App'
// import { createRoot } from 'react-dom/client'
const root = document.getElementById('root')
// const rootElem = createRoot(root)
// rootElem.render(<App  tab="home"/>)

ReactDom.render(<App/> , root)