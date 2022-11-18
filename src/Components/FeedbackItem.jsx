import { FaEdit, FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import propTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/Feedback.context'

const FeedbackItem = ({ item}) => {

  const {deleteFeedback,editFeedback } = useContext(FeedbackContext)
  


  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,

}

export default FeedbackItem
 