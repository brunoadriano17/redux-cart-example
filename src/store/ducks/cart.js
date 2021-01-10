export const Types = {
    ADD: "ADD",
    REMOVE: "REMOVE"
}

const INITIAL_STATE = { items: [] }

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, items: [...state.items, { id: Math.random(0, 1000), item: action.payload.item, qtd: 1 }] }
        case Types.REMOVE:
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) }
        default:
            return state;
    }
}

export const Creators = {
    add: (item) => ({
        type: Types.ADD,
        payload: {
            item
        }
    }),
    remove: (id) => ({
        type: Types.REMOVE,
        payload: {
            id
        }
    }),
}