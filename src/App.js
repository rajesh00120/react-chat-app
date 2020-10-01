import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./Chat/Chat"
import Join from './Join/Join'
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
