import React from 'react'
import Card_map from './card-api-fetch/Card_map'
import Header from './Layout/Header'
import Fotter from './Layout/Fotter'
import Home from './Layout/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Layout/About'
import Contact from './Layout/Contact'
import Help from './Layout/Help'
import Action1 from './Layout/Action1'
import Action2 from './Layout/Action2'
import Notfound from './Layout/Notfound'
// import Class_props from './props/Class_props'
// import State_obj from './state/State_obj'
// import Form_obj from './Form-handling/Form_obj'
// import Form_object from './Form-handling/Form_object'
// import Form_submitchange from './Form-handling/Form_submitchange'
// import Useeffect from './state/useeffect/useeffect'
// import Card from './bootstrape/Card'
// import React_boot from './bootstrape/React_boot'
// import Mdb_boot from './bootstrape/Mdb_boot'

function App() {


  return (
  <BrowserRouter>
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}>
    <Route path='action1' element={<Action1/>}/>
    <Route path='action2' element={<Action2/>}/>
    </Route>
  
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/help' element={<Help/>}/>
    <Route path='*' element={<Notfound/>}/>
    
  </Routes>
    {/* <Class_props/> */}

    {/* <State_obj/> */}
    {/* <Form_obj/> */}
    {/* <Form_object/> */}
    {/* <Form_submitchange /> */}
    {/* <Useeffect/> */}
    {/* <Card/> */}
    {/* <React_boot/> */}
    {/* <Mdb_boot/> */}
    {/* <Card_map /> */}


  </>
  </BrowserRouter>

  )
}

export default App
