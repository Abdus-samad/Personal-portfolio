import {services} from '../data';
import ServiceCard from '../Components/Home/ServiceCard';
import {motion} from 'framer-motion';
import {fadeInUp, routeAnimation, stagger} from '../animation';

const index = () => {
	return (
		<motion.div
			className='flex flex-col flex-grow px-6 pt-1'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<h5 className='my-3 font-medium'>
				I am a frontend developer from nigeria old and i am 19 years
				old. I have 1 and half year of experience i web development
			</h5>
			<div
				className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
				style={{marginLeft: '-1.5em', marginRight: '-1.5rem'}}>
				<h6 className='my-3 text-xl font-bold'>My Experties</h6>
				<motion.div
					className='grid gap-6 lg:grid-cols-2'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{services.map((service, index) => (
						<motion.div
							variants={fadeInUp}
							key={index}
							className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default index;
