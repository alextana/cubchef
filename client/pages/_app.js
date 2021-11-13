import 'tailwindcss/tailwind.css'
import './styles.css'
import Layout from '@/components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
