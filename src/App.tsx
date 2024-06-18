import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContactMePage, HelloPage, ProjectsPage } from '@pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HelloPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact-me' element={<ContactMePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
