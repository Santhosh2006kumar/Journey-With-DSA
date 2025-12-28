import './App.css'
import Navbar from './Navbar'
import Basics from './basics'

function App() {


  return (
    <>
      <div className="d-flex">
          <div className="w-20 border-end border-primary"><Navbar /></div>
          <div className="w-80  p-3 vh-100 text-center ms-2 me-2 overflow-y-auto">
            <Basics />
            
          </div>
      </div>
    </>
  )
}

export default App
