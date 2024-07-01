import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./pages/index.js"
import Classes from "./pages/Classes/classes.js"
import Spells from "./pages/Spells/spells.js"
import Races from "./pages/Races/races.js"

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" Component={Main} />
                    <Route exact path="/classes" Component={Classes} />
                    <Route exact path="/spells" Component={Spells} />
                    <Route exact path="/races" Component={Races} />
                </Routes>
            </Router>
        </div>
        
    )
}

export default AppRouter;