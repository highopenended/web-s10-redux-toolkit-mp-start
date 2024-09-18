// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit"


let id = 1
const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

export const quotesSlice=createSlice({
  name:'quotes',
  initialState,
  reducers:{
    toggleVisibility(state){state.displayAllQuotes=!state.displayAllQuotes},
    deleteQuote(state,action){
      state.quotes=state.quotes.filter(qt=>qt.id!==action.payload)
    },

    editQuoteAuthenticity(state,action){
      console.log(action.payload)
      state.quotes.map(qt=>{
        return qt.id===action.payload 
        ? qt.apocryphal=!qt.apocryphal
        : qt.apocryphal
      })
    },

    setHighlightedQuote(state,action){},
    createQuote(state,action){},
  }
})

export default quotesSlice.reducer
export const { 
  toggleVisibility,
  deleteQuote,
  editQuoteAuthenticity,
  setHighlightedQuote,
  createQuote
} = quotesSlice.actions




