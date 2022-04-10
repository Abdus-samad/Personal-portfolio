import '../styles/globals.css';
import Header from '../components/Home/Header';
import Siderbar from '../components/SideBar/Sidebar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			<Layout>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
