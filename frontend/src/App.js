import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container, Navbar, Badge, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";
import { useContext } from "react";
import { Store } from "./Store";
import SigninScreen from "./screens/SigninScreen";


function App() {
	const { state } = useContext(Store);
	const { cart } = state;
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
							<Nav className='me-auto'>
								<Link to='/cart' className='nav-link'>
									Cart
									{cart.cartItems.length > 0 && (
										<Badge pill bg='danger'>
											{cart.cartItems.reduce((a,c) => a + c.quantity, 0)}
										</Badge>
									)}
								</Link>
							</Nav>
						</Container>
					</Navbar>
				</header>
				<main>
					<Container className='mt-3'>
						<Routes>
							<Route path='/product/:slug' element={<ProductScreen />} />
							<Route path='/cart' element={<CartScreen />} />
							<Route path='/signin' element={<SigninScreen />} />
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
