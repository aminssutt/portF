import Portfolio from './components/Portfolio'
import CvPage from './components/CvPage'

const isCvPage = /^\/cv(\/|$)/.test(window.location.pathname)

export default function App() {
  return isCvPage ? <CvPage /> : <Portfolio />
}
