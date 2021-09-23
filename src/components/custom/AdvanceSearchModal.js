import React from "react"
// import PropTypes from 'prop-types'

const AdvanceSearchModal = () => {
  return (
    <>
      <div id="advance-search-modal" className="modal">
        <div className="modal-content">
          <h4>Enter System Log</h4>

          <div className="row">
            <div className="input-field">
              <input type="text" name="message" />
              <label htmlFor="message" className="active">
                Message
              </label>
            </div>
          </div>

          <div className="modal-footer">footer</div>
        </div>
      </div>
    </>
  )
}

// AdvanceSearchModal.propTypes = {}

export default AdvanceSearchModal
