import React, { createContext, useReducer } from 'react';
//import userId from '';

const UserContext = createContext({});
const userId = {};
export const UserProvider = (props) => {
    function reducer(state, action) {
        if (action.type === 'setUserId') {
            const userId = action.payload;
            return {
                ...state,
                userId: userId,
            };
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, userId);

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
