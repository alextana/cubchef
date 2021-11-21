
import Container from '../Grid/Container/Container';
import Logo from 'components/Header/Logo'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16">
      <Container>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Logo extraClass="ml-auto"/>
      </div>
      </Container>
    </footer>
  )
}
