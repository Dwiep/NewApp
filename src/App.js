import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React, { useState } from 'react'


const App = ()=> {
    const pageSize = 8;
    const apiKey = "953c7efebdc44d859b179607ff316871"
    const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={5}
        color='#e68a00'
        progress={progress} 
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="/general" pageSize={pageSize} country="us" category=""/>}>   </Route>            
            <Route exact path="/business"  element={<News setProgress={setProgress} apiKey={apiKey} key="/business" pageSize={pageSize} country="us" category="business"/>}>     </Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="/entertainment" pageSize={pageSize} country="us" category="entertainment"/>}> </Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="/general"  pageSize={pageSize} country="us" category="general"/>}>       </Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="/health" pageSize={pageSize} country="us" category="health"/>}>        </Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="/science" pageSize={pageSize} country="us" category="science"/>}>       </Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="/sports" pageSize={pageSize} country="us" category="sports"/>}>        </Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="/general" pageSize={pageSize} country="us" category="technology"/>}>                   </Route>
          </Routes>
        </Router>
      </div>
    )
  }
  export default App;


