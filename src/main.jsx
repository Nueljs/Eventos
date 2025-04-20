import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './assets/style/index.scss'


const root = createRoot(document.getElementById('root'))

root.render(
<App/>
)
