export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add TODO':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove TODO':
            return initialState.filter( todo => todo.id !== action.payload ); // Regresa todos los todos cuyo id sea diferente al id que se esta pasando por el payload

        case '[TODO] Toggle TODO':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) { // Si el id del todo es igual al id que se esta pasando por el payload
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
    
        default:
            return initialState;
    }

};