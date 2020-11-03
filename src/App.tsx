import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { TodoPage } from './pages/todopage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutPage } from './pages/aboutpage';

// FC - FunctionComponent

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={TodoPage} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
