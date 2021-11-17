import 'tailwindcss/tailwind.css'
import './styles.css'
import Layout from 'components/Layout/Layout'
import { AuthProvider } from '../lib/auth.js'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
