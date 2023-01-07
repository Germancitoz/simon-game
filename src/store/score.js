import { writable } from 'svelte/store'

export const score = writable({
  top: parseInt(window.localStorage.getItem('score-top')) || 0
})

score.subscribe((value) => {
  console.log('score', value)
})
