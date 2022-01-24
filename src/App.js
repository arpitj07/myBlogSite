import { Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import { Navbar } from './components/NavBar';
import { Blogs } from './components/Blogs';
import { HomePage } from './components/HomePage';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Posts } from './components/Posts';
// Router
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/createposts" element={<Blogs />} />
				{/* <Route path="/posts" element={<Posts />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
