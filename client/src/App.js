import Header from './components/ui/skeleton/header/Header'
import Main from './components/ui/skeleton/main/Main'
import Footer from './components/ui/skeleton/footer/Footer'

function App() {
  const test = [
    { name: 'test', lastName: 'haha' },
    { name: 'test', lastName: 'hahal' },
  ]
  return (
    <div>
      <Header data={test}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
