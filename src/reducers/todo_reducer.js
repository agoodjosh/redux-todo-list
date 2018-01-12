import types from '../actions/types';


const DEFAULT_STATE = {
    list: [
        {
            title: "Make to do List",
            details: 'Build it in react with redux'
        },
        {
            title: "Fix inappropriate typo",
            details: 'Fit to redux without an I'
        }
    ]
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.ADD_ITEM:
            return { list: [action.payload, ...state.list] }
        default:
            return state;
    }
};


