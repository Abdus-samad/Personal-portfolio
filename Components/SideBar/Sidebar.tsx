import {AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi';
import {useTheme} from 'next-themes';
import Image from 'next/image';

const Siderbar = () => {
	const {theme, setTheme} = useTheme();

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<>
			<Image
				src='/Images/Joker.jpg'
				alt=''
				className='w-32 h-32 mx-auto rounded-full'
				width='128px'
				height='128px'
				layout='intrinsic'
			/>
			<h3 className='my-4 text-3xl font-medium tracking-wide font-kaushan'>
				<span className='text-green'>Abdus-Samad</span> Ajao
			</h3>
			<p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
				Web Developer
			</p>
			<a
				href='/Images/Amazon.png'
				download='AmazonClone.png '
				className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
				<GiTie className='w-6 h-6' />
				Download Resume
			</a>

			<div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
				<a href=''>
					<AiFillGithub className='w-8 h-8 cursor-pointer' />
				</a>
				<a href=''>
					<AiOutlineTwitter className='w-8 h-8 cursor-pointer' />
				</a>
				<a href=''>
					<AiFillLinkedin className='w-8 h-8 cursor-pointer' />
				</a>
			</div>

			<div
				className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
				style={{marginLeft: '-1em', marginRight: '-1rem'}}>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span>Abuja,Nigeria</span>
				</div>
				<p>abdussamadajao@gmail.com</p>
				<p>08054176385/09027974675</p>
			</div>
			<button className='w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-tr from-green to-blue-400'>
				Email Me
			</button>
			<button
				onClick={changeTheme}
				className='w-8/12 px-3 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-tr from-green to-blue-400'>
				Toggle Theme
			</button>
		</>
	);
};

export default Siderbar;
