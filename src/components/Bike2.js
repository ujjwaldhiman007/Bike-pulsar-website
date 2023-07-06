import React, { useEffect, useState } from 'react';
import { bikeData } from './Data';
import { logo } from './Data';
import { features } from './Data';
import { Link } from 'react-router-dom';

export default function Bike() {
	const [index, setIndex] = useState(0);
	const { id, img, color, colorValue } = bikeData[index];

	return (
		<React.Fragment>
			<div className=' bike-section w-4/5 h-fit mx-auto my-12 md:mb-18   '>
				<div className='pulsar-logo-box'>
					<img src={logo} className=' pulsar-logo  mx-auto' alt='' />
				</div>
				<div className='bg-dimWhite rounded-lg text-gray-300  hover:bg-blue-400 shadow-secondary duration-500 sm:pb-2'>
					{/* bike function container  */}
					<main className='w-90 mx-auto my-4  '>
						<img className='mx-auto sm:w-4/5' src={img} alt='' key={id} />
						<div className='sm:w-3/5 sm:px-3 sm:mx-auto sm:rounded-xl sm:flex-row sm:justify-between bg-gray-300 text-black flex gap-3 flex-col items-center py-3 md:w-96 md:py-1'>
							<p className='text-xs font-semibold tracking-wide capitalize '>
								pick a shade thats fix your persona
							</p>
							<div className='text-center flex flex-col gap-1'>
								<h2 className='text-md font-semibold capitalize md:text-xs'>
									exciting color option
								</h2>
								<div className='flex gap-2 justify-center'>
									{bikeData.map((item, index) => {
										return (
											<button
												//    className="bg-red-600 p-3 rounded-full"
												className={`bg-${item.color}${item.colorValue} p-3 rounded-full`}
												onClick={(e) => {
													e.preventDefault();
													setIndex(index);
												}}
											></button>
										);
									})}
								</div>
								<p className='capitalize font-semibold'>{color}</p>
							</div>
						</div>
					</main>
				</div>

				<div className='text-center my-10 '>
					<h3 className='capitalize text-4xl font-bold md:text-6xl'>
						Definately male
					</h3>

					<section className='flex flex-col  gap-2 my-36 md:flex-row px-3'>
						{features.map((fetchFeatures) => {
							const { id, img, title, desc } = fetchFeatures;
							return (
								<div
									className='flex gap-3 items-center p-2 ss:px-5 ss:py-2 sm:flex-col  '
									key={id}
								>
									<img className='w-12 h-12 ss:w-16 ss:h-16' src={img} alt='' />
									<div className='text-left sm:text-center'>
										<h3 className='text-md font-bold capitalize ss:text-xl'>
											{title}
										</h3>
										<p className='text-xs ss:text-lg font-light'>{desc}</p>
									</div>
								</div>
							);
						})}
						<Link
							to='features'
							className='flex gap-3 items-center p-2 bg-blue-200 rounded-xl shadow-xl hover:bg-blue-600 text-blue-600  hover:text-white last-of-type:ss:px-5 ss:py-2 sm:flex-col'
						>
							<img
								className='w-12 h-12 ss:w-16 ss:h-16'
								src='https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/pulsarRS200/Bike-Feature-Navigation/View-Specification.ashx'
								alt=''
							/>

							<div className='text-left  sm:text-center'>
								<p className='text-xs  text-black font-bold  ss:text-lg  capitalize'>
									view pulsar RS200 Specification
								</p>
							</div>
						</Link>
					</section>
				</div>
			</div>
		</React.Fragment>
	);
}
