import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Footer from "./component/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className='d-flex flex-column site-container'>
				<header>
					<Navbar bg='dark' variant='dark'>
						<Container>
							<LinkContainer to='/'>
								<Navbar.Brand>
									<i className='fa-solid fa-house'></i> Card Zone
								</Navbar.Brand>
							</LinkContainer>
						</Container>
					</Navbar>
				</header>
				<main>
					<Container>
						<Routes>
							<Route path='/product/:slug' element={<ProductScreen />} />
							<Route path='/' element={<HomeScreen />} />
						</Routes>
					</Container>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
