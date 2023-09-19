import { useSelector } from "react-redux"
import { Mainboard } from "./components/mainboard"
import { SelectUserPanel } from "./components/selectUserPanel"
import { State } from "./store/store"

function App() {

  const {currentUser} = useSelector((state: State) => state.user)
  

  return (
    <div className="container mx-auto">
      <SelectUserPanel />
      <hr />
      {currentUser && <Mainboard />}      
    </div>
  )
}

export default App
