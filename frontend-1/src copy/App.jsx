
import Greeting from './components/single-component/Greeting'
import Header from  './components/multiple-components/Header/Header'
import Footer from './components/multiple-components/Footer/Footer'
import JSXExamples from './components/Jsx-Example/JSXExamples'
import ConditionalRendering from './components/Conditional-Rendering/ConditionalRendering'
import InlineStyleExample from './components/Inline-Style/InlineStyleExample'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Greeting />
        <JSXExamples />
        <ConditionalRendering />
        <InlineStyleExample />
      </main>
      <Footer />
    </div>
  )
}
export default App
