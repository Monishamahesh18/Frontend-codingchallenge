import { Route, Routes } from "react-router"
import ObjectsDashboard from "./components/ObjectsDashboard"
import PageNotFound from "./components/PageNotFound"

function App() {
return(
  <Routes>
    <Route path="" element={<ObjectsDashboard />}/>
    <Route path="*" element={<PageNotFound />}/>
  </Routes>
)

}

export default App