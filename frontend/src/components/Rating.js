const Rating = props => {
	const { rating } = props;
	const totalReviews = props.numReview;
	return (
		<div className='Rating'>
			<span>
				<i
					className={
						rating >= 1
							? "fa-solid fa-star"
							: rating >= 0.5
							? "fa-solid fa-star-half-stroke"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 2
							? "fa-solid fa-star"
							: rating >= 1.5
							? "fa-solid fa-star-half-stroke"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 3
							? "fa-solid fa-star"
							: rating >= 2.5
							? "fa-solid fa-star-half-stroke"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 4
							? "fa-solid fa-star"
							: rating >= 3.5
							? "fa-solid fa-star-half-stroke"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 5
							? "fa-solid fa-star"
							: rating >= 4.5
							? "fa-solid fa-star-half-stroke"
							: "far fa-star"
					}
				></i>
			</span>
			<span>{totalReviews} reviews</span>
		</div>
	);
};

Rating.defaultProps = {
	color: "#E4572E",
};

export default Rating;
