import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutMePage, ContactMePage, HelloPage, ProjectsPage } from '@pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HelloPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact-me' element={<ContactMePage />} />
        <Route path='/about-me' element={<AboutMePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
