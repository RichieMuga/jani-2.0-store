import { Provider } from 'react-redux'
import '../styles/globals.css'
/* Add this to your CSS file */
import 'normalize.css';
import { store } from "../store/index";

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
