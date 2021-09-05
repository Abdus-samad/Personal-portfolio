import {FunctionComponent} from 'react';
import {Category} from '../../type';

export const NavItem: FunctionComponent<{
	value: Category | 'all';
	handlerFilterCategory: Function;
	active: string;
}> = ({value, handlerFilterCategory, active}) => {
    
	let className = 'uppercase list-none cursor-pointer hover:text-green'
	if (active === value) className += ' text-green';

	return (
		<li className={className} onClick={() => handlerFilterCategory(value)}>
			{value}
		</li>
	);
};

const ProjectNavbar: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
			<NavItem value='all' {...props} />
			<NavItem value='react' {...props} />
			<NavItem value='nextJs' {...props} />
			<NavItem value='html & css' {...props} />
			<NavItem value='mongo' {...props} />
			<NavItem value='firebase' {...props} />
		</div>
	);
};

export default ProjectNavbar;
