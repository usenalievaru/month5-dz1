import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import RequestPage from "./pages/RequestPage.jsx";
import FormPage2 from "./pages/FormPage.jsx";


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<RequestPage/>}/>
            <Route path='form' element={<FormPage2/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
