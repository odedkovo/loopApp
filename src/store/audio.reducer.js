const initialState = {
  play: false,
  audios: [
    { name: 'DRUMS', _id: 1, color: '#ffa1a1', isMute: false },
    { name: 'TAMBOURINE', _id: 2, color: '#896cca', isMute: false },
    { name: 'ALLTRACK', _id: 3, color: 'green', isMute: false },
    { name: 'HEHEVOC', _id: 4, color: 'lightgreen', isMute: false },
    { name: 'HIGHVOC', _id: 5, color: 'lightblue', isMute: false },
    { name: 'JIBRISH', _id: 6, color: 'lightgrey', isMute: false },
    { name: 'LEAD', _id: 7, color: 'lightpink', isMute: false },
    { name: 'UUHOVOC', _id: 8, color: 'lightyellow', isMute: false },
  ],
  isLoop: false,
  pause: false,
};

export function audioReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case 'TOGGLE_MUTE':
      console.log('in reducer');
      console.log(action.updatedAudio);
      newState = {
        ...state,
        audios: [
          ...state.audios.map((audio) => {
            return action.updatedAudio._id === audio._id
              ? action.updatedAudio
              : audio;
          }),
        ],
      };

      break;

    case 'TOGGLE_PLAY':
      console.log('in reducer');

      newState = {
        ...state,
        play: action.boolean,
      };

      break;

    case 'TOGGLE_LOOP':
      console.log('in reducer');

      newState = {
        ...state,
        isLoop: !state.isLoop,
      };

      break;
    case 'TOGGLE_PAUSE':
      console.log('in reducer');
      newState = {
        ...state,
        pause: action.boolean,
      };

      break;
    default:
  }

  return newState;
}
