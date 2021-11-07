import Container from '../Grid/Container/Container'
import Logo from '../Header/Logo'
import Search from '../Header/Search'
import Profile from '../Header/Profile'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-300">
      <Container extraClass="flex items-center justify-between py-3">
        <Logo/>
        <Search/>
        <Profile/>
      </Container>
    </nav>
  )
}