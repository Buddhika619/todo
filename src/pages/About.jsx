import { Link } from 'react-router-dom'
import Card from '../Components/shared/Card'

const About = () => {
  return (
    <Card>
      <h1>About</h1>
      <p>This is a react app to leave feedback for a product</p>
      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </Card>
  )
}

export default About
