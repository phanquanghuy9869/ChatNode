
const initialState = {
    users: [],
    rooms: []
};

export default function reducer(state = initialState, action) {
    console.log('reducer: ', state, action);
    return state;
}