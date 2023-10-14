// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {colorButton: false}

  onButton = () => {
    this.setState(prevState => ({colorButton: !prevState.colorButton}))
  }

  render() {
    const {colorButton} = this.state
    const modeColorButton = colorButton ? 'light-mode' : 'dark-mode'
    const mainButtonText = colorButton ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`main-card-container ${modeColorButton}`}>
          <h1 className="main-heading">click To Change Mode</h1>
          <button
            type="button"
            onClick={this.onButton}
            className="color-button"
          >
            {mainButtonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
