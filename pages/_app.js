import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {

    return (
        <>

            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
            <Component {...pageProps} />
            <Footer />
            </AnimatePresence>

        </>
    )
}

export default MyApp
