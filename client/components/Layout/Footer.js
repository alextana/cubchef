import Container from '../Grid/Container/Container'
import Logo from 'components/Header/Logo'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <div className="ml-auto text-gray-500">
            Made with <span className="text-red-500">&hearts;</span> by{' '}
            <a
              className="hover:text-blue-500"
              href="https://github.com/alextana"
              target="_blank noopener noreferrer"
            >
              Alex Tana
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
