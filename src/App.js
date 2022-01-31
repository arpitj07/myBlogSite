import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import { NavBar } from './components/NavBar';
import { CreateBlogs } from './components/Blogs';
import { HomePage } from './components/HomePage';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Auth } from './components/Auth';

function App() {
	return (
		<BrowserRouter>
			<Auth>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/createposts" element={<CreateBlogs />} />
				</Routes>
			</Auth>
		</BrowserRouter>
	);
}

export default App;
