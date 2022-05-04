import data from "./data";

function App() {
	return (
		<div>
			<header>
				<a href='/'> Card Zone </a>
			</header>
			<main>
				<h1>Featured Products</h1>
				<div className='products'>
					{data.products.map((product) => (
						<div className='product' key={product.slug}>
							<a href={`/products/${product.slug}`}>
								<img src={product.image} alt={product.name} />
							</a>
							<div className='product-info'>
								<a href={`/products/${product.slug}`}>
									<p>{product.name}</p>
								</a>
								<p><strong>${product.price}</strong></p>
								<button>Add to Cart</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;