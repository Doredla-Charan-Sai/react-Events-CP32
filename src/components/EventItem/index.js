// Write your code here
import './index.css'

const EventItem = props => {
  const {details, onTouch} = props
  const onSelect = () => {
    onTouch(details.id)
  }
  return (
    <button type="button" onClick={onSelect} className="click-btn">
      <img src={details.imageUrl} alt="event" className="image" />
    </button>
  )
}

export default EventItem
