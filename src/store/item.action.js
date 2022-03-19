/* eslint-disable */

// export function loadItems() {
//   console.log('in action');
//   return async (dispatch) => {
//     try {
//       const items = await CrudlService.query();
//       console.log(items);
//       dispatch({ type: 'SET_ITEMS', items });
//       // dispatch({ type: 'SET_CURRITEM', item });
//     } catch (err) {
//       console.log('could not get items ', err);
//     }
//   };
// }

// export function addItem(item) {
//   console.log(item);
//   return async (dispatch) => {
//     try {
//       const savedItem = await CrudlService.save(item);
//       console.log(savedItem);
//       console.log('Added Succesfully!');
//       dispatch({ type: 'ADD_BOARD', savedItem });
//     } catch (err) {
//       console.log('cannot add item', err);
//     }
//   };
// }

export function updateItem(updatedAudio) {
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

export function playSound() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'PLAY_SOUND' });
    } catch (err) {
      console.log('coudnt toggle play ', err);
    }
  };
}
export function stopSound() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'STOP_SOUND' });
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
      console.log('coudnt toggle loop ', err);
    }
  };
}

// export function removeItem(itemId) {
//   return (dispatch) => {
//     CrudlService.remove(itemId)
//       .then(() => {
//         dispatch({ type: 'REMOVE_BOARD', itemId });
//       })
//       .catch((err) => {
//         console.log('cannot delete item');
//       });
//   };
// }
