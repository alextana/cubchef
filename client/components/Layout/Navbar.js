import Container from '../Grid/Container/Container'
import Logo from '../Header/Logo'
import Search from '../Header/Search'
import Profile from '../Header/Profile'

export default function Navbar() {
  return (
    <nav className="">
      <Container extraClass="flex items-center py-3 gap-6">
        <Logo extraClass="flex-initial" />
        <Search />
        <Profile extraClass="ml-auto" />
      </Container>
    </nav>
  )
}
