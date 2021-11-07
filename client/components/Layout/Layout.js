import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
        <main className="bg-gray-100">
          {children}
        </main>
      <Footer/>
    </>
  )
}
