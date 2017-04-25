import React from 'react'
import PropTypes from 'prop-types'

import TrackKeys from './TrackKeys'

const Body = ({ tracks, highlightTrack, toggleTrackOpen, clickTrackButton }) => (
  <div className="rt-sidebar__body">
    <TrackKeys
      tracks={tracks}
      highlight={highlightTrack}
      toggleOpen={toggleTrackOpen}
      clickTrackButton={clickTrackButton}
    />
  </div>
)

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
  highlightTrack: PropTypes.func,
}

export default Body
