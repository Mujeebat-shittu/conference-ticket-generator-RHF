import Form from './pages/form.tsx'
import Ticket from './pages/ticket.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {


  return (
    <>
    <BrowserRouter>
      <div className="wrapper">
        <div className="bg-layer top-right"></div>
        <div className="lines"></div>
        <div className="bg-layer circle"></div>
        <div className="bg-layer bottom-left"></div>

        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/ticket' element={<Ticket />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
