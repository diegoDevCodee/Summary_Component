const Results = () => {
	return (
		<div className="sm:w-[22rem] sm:h-[30rem] w-full h-full bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue rounded-b-[2rem] flex flex-col justify-center items-center gap-4 sm:gap-8 sm:rounded-l-[2rem] sm:rounded-r-none sm:shadow-xl">
			<h3 className="font-bold text-lightLavender">Your Result</h3>
			<div className="w-[8rem] h-[8rem] rounded-full flex flex-col justify-center items-center gap-2 bg-gradient-to-b from-violetBlue to-persianBlue">
				<h2 className="text-paleBlue text-5xl font-black">76</h2>
				<p className="text-lightLavender text-sm">of 100</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-1">
				<h2 className="text-paleBlue font-bold tracking-wide text-xl sm:text-2xl">Great</h2>
				<p className="text-lightLavender w-[16rem] text-center text-sm sm:text-lg">
					You scored higher than 65% of the people who have taken these tests.
				</p>
			</div>
		</div>
	);
};

export default Results;
