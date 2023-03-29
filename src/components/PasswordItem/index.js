import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, showPassword} = props
  const {id, website, username, password} = passwordDetails
  const initial = website ? website[0].toUpperCase() : ''

  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="comment-container">
        <div>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <p className="username">{website}</p>
          <p className="time">{username}</p>
          {showPassword ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          type="button"
          onClick={onDeletePassword}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
