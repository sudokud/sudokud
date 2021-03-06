import { useReducer } from 'react'
import storage from 'local-storage-fallback'

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            storage.setItem("isDark", !state.isDark)
            return {
                ...state,
                isDark: !state.isDark
            }
        case "TOGGLE_INPUT":
            return {
                ...state,
                INPUT_HOVERED: !state.INPUT_HOVERED
            }
        case "TOGGLE_CARD":
            return {
                ...state,
                CARD_HOVERED: !state.CARD_HOVERED
            }
        case "TOGGLE_HOVERED_MODE":
            return {
                ...state,
                isHovered: !state.isHovered
            }
        default: {
            return state
        }
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false,
        INPUT_HOVERED: false,
        isHovered: false,
    })

    return { state, dispatch }
}

export default useGlobalState