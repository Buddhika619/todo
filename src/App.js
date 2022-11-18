
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './Components/Header'
import FeedbackList from './Components/feedbackList'
import FeedbackStats from './Components/feedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './pages/About'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './context/Feedback.context'

const App = () => {




  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList  />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
