import { Route, Routes, Navigate } from 'react-router-dom'
import Redio from './Components/Redio.jsx'
import Listen from './Components/Listen.jsx'
import Browser from './Components/Browser.jsx'
import Home from './pages/Home.jsx'
import Text from './pages/text.jsx'
import Search from './Components/Search.jsx'
import Category from './Components/Category.jsx'
import Billboard from './Components/Billboard.jsx'
import './styles/App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/text" element={<Text/>}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<Browser/>}></Route>
          <Route path='search/:id' element={<Search/>}>
          </Route>
          <Route path='browser' element={<Browser/>} />
          <Route path='category' element={<Category/>}>
          </Route>
          <Route path="listen-now" element={<Listen />} />
          <Route path='redio' element={<Redio/>} />
          <Route path='billboard' element={<Billboard/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
