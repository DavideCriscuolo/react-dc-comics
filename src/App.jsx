import { useState } from 'react'
import './App.css'
import Header from './components/AppHeader'
import Main from './components/AppMain'
import Asaide from './components/Asaide'
import Footer from './components/AppFooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Asaide></Asaide>
      <Footer></Footer>
    </>
  )
}

export default App
