import Immutable from 'seamless-immutable'

export const CATEGORYS_CLEAR = 'CATEGORYS_CLEAR'

export const Creators = {
    clearEvents: () => {
        return {
            type: CATEGORYS_CLEAR
        };
    }
};

/* ------------- Initial State ------------- */
export const CATEGORY = {};

export const INITIAL_STATE = Immutable([
    {
        title: 'Category 1',
        categoryId: 1,
        linkText: 'See all'
    },
    {
        title: 'Category 2',
        categoryId: 2,
        linkText: 'See all'
    },
    {
        title: 'Category 3',
        categoryId: 3,
        linkText: 'See all'
    }
]);

/* ------------- Reducers ------------- */
export const clear = (state) => INITIAL_STATE


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORYS_CLEAR:
            return clear(state);
        default:
            return state;
    }
};
