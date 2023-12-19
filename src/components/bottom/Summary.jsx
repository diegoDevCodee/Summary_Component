import data from '../../data/data.json';
import Button from '../button/Button';

const Summary = () => {
	return (
		<div className="px-6 mt-6 sm:mt-0 sm:w-[20rem] sm:h-[30rem] h-full sm:shadow-xl sm: rounded-r-[2rem] sm:flex sm:flex-col sm:justify-center">
			<h3 className="font-bold text-darkGrayBlue text-lg my-4">Summary</h3>

			<div className="flex flex-col gap-6 my-4">
				{data.map((item) => (
					<div
						style={{ backgroundColor: item.bg, color: item.color }}
						className="w-full h-10 flex justify-between items-center px-2 py-6 rounded-lg overflow-hidden relative"
					>
						<div
							style={{ width: `${item.score}%`, backgroundColor: item.bgH }}
							className={`absolute top-0 left-0 h-full`}
						></div>
						<div className="flex gap-4">
							<img src={item.icon} alt="icon" />
							{item.category}s
						</div>
						<div className="flex gap-2">
							<span className="text-darkGrayBlue font-bold">{item.score}</span>
							<span className="text-gray-400">/ 100</span>
						</div>
					</div>
				))}
			</div>
			<Button />
		</div>
	);
};

export default Summary;
