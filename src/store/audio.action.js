export function updateAudio(updatedAudio) {
  console.log(updatedAudio);
  return async (dispatch) => {
    try {
      dispatch({ type: 'TOGGLE_MUTE', updatedAudio });
      // dispatch({ type: 'UPDATE_CURRBOARD', updatedItem });
    } catch (err) {
      console.log('couldnt update item', err);
    }
  };
}

export function togglePlay(boolean) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'TOGGLE_PLAY', boolean });
    } catch (err) {
      console.log('coudnt toggle play ', err);
    }
  };
}

export function toggleLoop() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'TOGGLE_LOOP' });
    } catch (err) {
      console.log('coudnt toggle isLoop ', err);
    }
  };
}
export function togglePause(boolean) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'TOGGLE_PAUSE', boolean });
    } catch (err) {
      console.log('coudnt toggle isLoop ', err);
    }
  };
}
