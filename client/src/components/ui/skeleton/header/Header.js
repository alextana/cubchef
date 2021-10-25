import Logo from './logo/Logo'
import HeaderSearch from './search/HeaderSearch'
import HeaderProfile from './profile/HeaderProfile'
import Container from '../../grid/Container'

export default function Header() {
  return (
    <div className="border-b border-gray-300">
      <Container>
        <Logo />
        <HeaderSearch />
        <HeaderProfile />
      </Container>
    </div>
  )
}
