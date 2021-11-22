import { useReducer } from "react"

const actions = {
  rating: 'Rating value',
  input: 'Input value',
  language: 'Language value'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.input:
      return {
        ...state,
        input: action.payload
      }
      case actions.rating:
        return {
          ...state,
          rating: action.payload
        }
      case actions.language:
      return {
        ...state,
        language: action.payload
      }
      default:
      return state;
  }
}

export function reducerValues({topic}) {
  const [{input, rating, language}, dispatch] = useReducer(reducer, {input: topic, rating: 'g', language: 'en'})

  return {
    input,
    rating,
    language,
    changeInput: (e) => dispatch({ type: actions.input, payload: e.target.value }),
    changeRating: (e) => dispatch({ type: actions.rating, payload: e.target.value }),
    changeLanguage: (e) => dispatch({ type: actions.language, payload: e.target.value })
  }
}