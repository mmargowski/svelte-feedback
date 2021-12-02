import {writable} from "svelte/store"

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "lorem ipsum1"
  },
  {
    id: 2,
    rating: 9,
    text: "lorem ipsum2"
  },
  {
    id: 3,
    rating: 2,
    text: "lorem ipsum3"
  }
])