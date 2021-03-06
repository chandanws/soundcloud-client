import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

function mapStateToProps(state) {
  const { user } = state.auth;
  const { trackIds, trackEntities, activeTrackId } = state.track;
  return {
    user,
    trackIds,
    trackEntities,
    activeTrackId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch),
    onLike: bindActionCreators(actions.likeTrack, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
