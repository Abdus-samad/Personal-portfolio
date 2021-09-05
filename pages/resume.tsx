import {motion} from 'framer-motion';
import Bar from '../components/Home/Bar';
import {languages, tools} from '../data';
import {fadeInUp, routeAnimation} from '../animation';

const resume = () => {
	return (
		<motion.div
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'
			className='px-6 py-2'>
			<div className='grid gap-6 md:grid-cols-2'>
				<motion.div
					variants={fadeInUp}
					initial='initial'
					animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Education</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Lorem ipsum dolor
						</h5>
						<p className='font-semibold'>
							Lorem ipsum dolor sit amet consectetur
						</p>
						<p className='my-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ut consequuntur animi impedit numquam cumque
							totam officia?
						</p>
					</div>
				</motion.div>
				<motion.div
					variants={fadeInUp}
					initial='initial'
					animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Experience</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Lorem ipsum dr
						</h5>
						<p className='font-semibold'>LOR (2020 - now)</p>
						<p className='my-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
					</div>
				</motion.div>
			</div>

			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<h5 className='my-3 text-2xl font-bold'>
						Languages & Frameworks
					</h5>
					<div className='my-2'>
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold'>
						Tools & Softwares
					</h5>
					<div className='my-2'>
						{tools.map((tool) => (
							<Bar data={tool} key={tool.name} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default resume;
