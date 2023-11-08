// Write your code here
import './index.css'

const statusesConstants = {
  registered: 'REGISTERED',
  yetToReg: 'YET_TO_REGISTER',
  regClose: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {statusText} = props
  switch (statusText) {
    case statusesConstants.registered:
      return (
        <div className="reg-cont">
          <img
            className="registration"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h1 className="reg-para">
            You have already registered for the event
          </h1>
        </div>
      )
    case statusesConstants.yetToReg:
      return (
        <div className="reg-cont">
          <img
            className="yet-registration"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p className="reg-para">
            A live performance brings so much to your relationship with dance
            Complete the below steps to create your development environment and
            start working on some amazing projects!
          </p>
          <button type="button" className="reg-btn">
            Register Here
          </button>
        </div>
      )
    case statusesConstants.regClose:
      return (
        <div className="reg-cont">
          <img
            className="close-registration"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1 className="reg-close-text">Registrations Are Closed Now!</h1>
          <p className="reg-close-para">
            Stay tuned. We will reopen the registration soon!
          </p>
        </div>
      )
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
