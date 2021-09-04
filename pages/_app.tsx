import '../styles/globals.css';
import Header from '../Components/Home/Header';
import Siderbar from '../Components/SideBar/Sidebar';
import {ThemeProvider} from 'next-themes';
import {AnimatePresence} from 'framer-motion';

function MyApp({Component, pageProps, router}) {
	return (
		<ThemeProvider attribute='class'>
			<div className='grid grid-cols-12 gap-6 px-12 my-4 lg:px-32 sm:px-20 md:px-28 '>
				<div className='col-span-12 p-4 text-center bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 lg:col-span-4 rounded-2xl'>
					<Siderbar />
				</div>
				<div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-cus tom-dark dark:bg-dark-500 lg:col-span-8 rounded-2xl'>
					<Header />
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route}/>
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
