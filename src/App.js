import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import { Navbar } from './components/NavBar';
import { CreateBlogs } from './components/Blogs';
import { HomePage } from './components/HomePage';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Posts } from './components/Posts';
// // Router

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<CreateBlogs />} />
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
