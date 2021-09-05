import {RiComputerLine} from 'react-icons/ri';
import {
	SiTailwindcss,
	SiTypescript,
	SiNextDotJs,
	SiReact,
	SiJavascript,
} from 'react-icons/si';
import {BsCircleFill} from 'react-icons/bs';

import {IProject, IService, ISkill} from './type';

export const services: IService[] = [
	{
		title: 'React',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium?',
		Icon: SiReact,
	},
	{
		title: 'Tailwind',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium?',
		Icon: SiTailwindcss,
	},
	{
		title: 'TypeScript',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium?',
		Icon: SiTypescript,
	},
	{
		title: 'nextjs',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium?',
		Icon: SiNextDotJs,
	},
	{
		title: 'JavaScript',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium?',
		Icon: SiJavascript,
	},
	{
		title: 'Whatever',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium?',
		Icon: RiComputerLine,
	},
];

export const languages: ISkill[] = [
	{
		name: 'Java  Script',
		level: '75',
		Icon: BsCircleFill,
	},
	{
		name: 'React',
		level: '80',
		Icon: BsCircleFill,
	},
	{
		name: 'NextJs',
		level: '65',
		Icon: BsCircleFill,
	},
	{
		name: 'Tailwind',
		level: '90',
		Icon: BsCircleFill,
	},
	{
		name: 'Bootstrap',
		level: '50',
		Icon: BsCircleFill,
	},
];

export const tools: ISkill[] = [
	{
		name: 'Vscode',
		level: '75',
		Icon: BsCircleFill,
	},
];

export const projects: IProject[] = [
	{
		id: 1,
		name: 'Amazon Clone',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Amazon.png',
		deployed_url: 'https://amazon-jqxqe6y25-abdus-samad.vercel.app',
		category: ['nextJs', 'firebase'],
		github_url: 'https://github.com/Abdus-samad/amazon',
		key_techs: ['nextJs', 'Context Api'],
	},
	{
		id: 2,
		name: 'Ecommerce',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Ecommerce.png',
		deployed_url: 'https://ecommerce-g0clswj68-abdus-samad.vercel.app',
		category: ['nextJs', 'firebase'],
		github_url: 'https://github.com/Abdus-samad/E-Shop',
		key_techs: ['nextJs', 'Tailwind-CSS', 'Context Api'],
	},
	{
		id: 3,
		name: 'ContactKeeper',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Contact.png',
		deployed_url: 'https://contact-keeper-33.herokuapp.com/',
		category: ['react', 'mongo'],
		github_url: 'https://github.com/Abdus-samad/Contact-Keeper',
		key_techs: ['React', 'Express', 'BootStrap', 'Context Api'],
	},
	{
		id: 4,
		name: 'Glade Clone',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Glade.png',
		deployed_url: 'https://glade-clone-1n0gzjmzv-abdus-samad.vercel.app',
		category: ['html & css'],
		github_url: 'https://github.com/Abdus-samad/Glade-clone',
		key_techs: ['HTML & CSS', 'JavaScript'],
	},
	{
		id: 5,
		name: 'Racing Club',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/car.png',
		deployed_url: 'https://racing-club-e38zztu9m-abdus-samad.vercel.app',
		category: ['html & css'],
		github_url: 'https://github.com/Abdus-samad/racing-club',
		key_techs: ['HTML & CSS', 'JavaScript'],
	},
	{
		id: 6,
		name: 'Whatapp 2.0',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Whatapp.png',
		deployed_url: 'https://whatapp-xi.vercel.app',
		category: ['nextJs', 'firebase'],
		github_url: 'https://github.com/Abdus-samad/whatapp',
		key_techs: ['nextJs', 'Styled Component'],
	},
	{
		id: 7,
		name: 'BlogPost',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Blog.png',
		deployed_url: 'https://blog-islqosoph-abdus-samad.vercel.app',
		category: ['nextJs'],
		github_url: 'https://github.com/Abdus-samad/whatapp',
		key_techs: ['nextJs', 'Tailwind-Css'],
	},
	{
		id: 8,
		name: 'Google 2.0',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Google.png',
		deployed_url: 'https://google2-0-fawn.vercel.app',
		category: ['nextJs'],
		github_url: 'https://github.com/Abdus-samad/Google2.0',
		key_techs: ['nextJs', 'Tailwind-Css'],
	},
	{
		id: 9,
		name: 'Contact Manager',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/Manager.png',
		deployed_url: 'https://contactmanager-pink.vercel.app',
		category: ['react'],
		github_url: 'https://github.com/Abdus-samad/contactmanager',
		key_techs: ['React', 'BootStrap'],
	},
	{
		id: 10,
		name: 'Github Finder',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image_path: '/Images/GithubFinder.png',
		deployed_url: 'https://ajao.netlify.app',
		category: ['react'],
		github_url: 'https://github.com/Abdus-samad/GithubFinder',
		key_techs: ['React', 'BootStrap', 'Context Api'],
	},
];
