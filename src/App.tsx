import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import GreaterCo from './greeter/Greater';
import HomePage from './home/HomePage';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import ProjectPage from './projects/ProjectPage';
import {Provider} from 'react-redux';
import {store} from './hooks/redux/store';

function App() {
  return (
  <Provider store={store}>
    <Router>
        <header className="sticky">
            <span className="logo">
                <img src="assets/logo-3.svg" alt="logo" width="49" height="99"/>
            </span>
            <NavLink to="/" className="button rounded">
                <span className="icon-home"></span>
                Home
            </NavLink>
            <NavLink to="/projects" className="button rounded">
                Projects
            </NavLink>
            <NavLink to="/greeter" className="button rounded">
                Greeter
            </NavLink>
        </header>
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/greeter" element={<GreaterCo name="test" enthusiasmLevel={5} />}/>
                <Route path="/projects/:id" element={<ProjectPage/>}/>
            </Routes>
        </div>
    </Router>
  </Provider>
  );
}

export default App;
