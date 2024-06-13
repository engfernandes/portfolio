import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelloPage, ProjectsPage } from '@pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HelloPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
