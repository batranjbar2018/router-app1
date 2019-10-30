import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path ="/about" component={About}/>
        <Route path ="/blog" component={Blog} exact/>
        <Route path ="/blog/:id" component={BlogPost}/>
        <Route path="/search" component={Search}></Route>
        <Route  component={NotFound}/>
        </Switch>
        </div>
    </Router>

  );
}

export default App;
