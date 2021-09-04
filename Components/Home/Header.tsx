import {useState, useEffect, FunctionComponent} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const NavItem: FunctionComponent<{
	active: string;
	setActive: Function;
	name: string;
	route: string;
}> = ({active, name, route, setActive}) => {
	return active !== name ? (
		<Link href={route}>
			<a>
				<span className='hover:text-green' onClick={() => setActive(name)}>{name}</span>
			</a>
		</Link>
	) : null;
};

const Header = () => {
	const [active, setActive] = useState<string>('');

	const {pathname} = useRouter();

	useEffect(() => {
		if (pathname === '/') setActive('About');
		if (pathname === '/projects') setActive('Projects');
		if (pathname === '/resume') setActive('Resume');
	}, []);

	return (
		<div className='flex justify-between px-5 py-3 my-3'>
			<span className='text-xl font-bold text-black border-b-4 border-green dark:text-white md:text-2xl'>
				{active}
			</span>
			<div className='flex space-x-5 text-lg '>
				<NavItem
					active={active}
					setActive={setActive}
					name='About'
					route='/'
				/>
				<NavItem
					active={active}
					setActive={setActive}
					name='Projects'
					route='/projects'
				/>
				<NavItem
					active={active}
					setActive={setActive}
					name='Resume'
					route='/resume'
				/>
			</div>
		</div>
	);
};

export default Header;
