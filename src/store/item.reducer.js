// in the start of project change all the item to the word we working on

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
  loop: false,
};

export function itemReducer(state = initialState, action) {
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

    case 'PLAY_SOUND':
      console.log('in reducer');

      newState = {
        ...state,
        play: true,
      };

      break;

    case 'STOP_SOUND':
      console.log('in reducer');

      newState = {
        ...state,
        play: false,
      };

      break;

    case 'TOGGLE_LOOP':
      console.log('in reducer');

      newState = {
        ...state,
        loop: !state.loop,
      };

      break;

    // case 'UPDATE_ITEMS':
    //   newState = {
    //     ...state,
    //     items: state.items.map((item) => {
    //       // console.log(item, action.updatedItem);
    //       return item._id === action.updatedItem._id
    //         ? action.updatedItem
    //         : item;
    //     }),
    //   };
    //   break;

    // case 'ADD_ITEM':
    //   newState = {
    //     ...state,
    //     items: [...state.items, action.savedItem],
    //   };
    //   break;

    // case 'SET_ITEM':
    //   newState = { ...state, currItem: action.currItem };
    //   break;

    // case 'REMOVE_ITEM':
    //   newState = {
    //     ...state,
    //     items: state.items.filter((item) => item._id !== action.itemId),
    //   };
    //   break;

    // case 'UPDATE_CURRITEM':
    //   newState = {
    //     ...state,
    //     currItem: action.updatedItem,
    //   };
    //   break;

    default:
  }

  return newState;
}
