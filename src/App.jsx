import { BrowserRouter } from 'react-router-dom'
import Category from './components/Category'
import Pages from './pages/Pages'
import Search from './components/search'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Search></Search>
      <Category></Category>
      <Pages></Pages>
    </BrowserRouter>
  )
}

export default App
