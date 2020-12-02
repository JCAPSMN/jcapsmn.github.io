import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Blog from './pages/Blog';
import Post from './components/Post';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
	library.add(fab, faCheckSquare, faCoffee);
  return (
    <BrowserRouter>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/adopt" component={Adopt} />
			<Route exact path="/blog" component={Blog} />
			<Route path="/blog/:slug" component={Post} />
		</Switch>
		<Footer />
    </BrowserRouter>
  );
}
export default App;
