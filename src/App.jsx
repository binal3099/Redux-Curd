import { Route, Routes } from 'react-router'
import StudentData from './Component/StudentData/StudentData'
import ViewData from './Component/ViewData/ViewData'
import EditEmp from './Component/EditStudent/EditStu'


function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<ViewData />} />
      <Route path='/Add' element={<StudentData />} />
      <Route path='/edit/:id' element={<EditEmp />} />
    </Routes>
    </>
  )
}

export default App
