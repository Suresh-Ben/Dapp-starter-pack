import React from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import TempPage from './pages/TempPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<TempPage />} exact/>
                
            </Switch>
        </Router>
    );
}

export default App;