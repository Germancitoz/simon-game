<script>
  import colors from '../data/colors.js'
  import Pad from './Pad.svelte'

  let game = {
    playing: false,
    instructions: [],
    current: 0
  }

  function toggleColor(color) {
    return new Promise((resolve, reject) => {
      document.getElementById(color.name).classList.remove(color.inactive)
      document.getElementById(color.name).classList.add(color.active)
      setTimeout(() => {
        document.getElementById(color.name).classList.remove(color.active)
        document.getElementById(color.name).classList.add(color.inactive)
        resolve()
      }, 1000)
    })
  }

  async function showIntructions() {
    for (const color of game.instructions) {
      await toggleColor(color)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }

  function handleColor(event) {
    if (game.instructions[game.current].name === event.target.id) {
      toggleColor(game.instructions[game.current])
      if (game.current === game.instructions.length - 1) {
        game.current = 0
        game.instructions = [
          ...game.instructions,
          colors[Math.floor(Math.random() * colors.length)]
        ]
        setTimeout(() => {
          showIntructions()
        }, 1000)
      } else {
        game.current++
      }
    } else {
      alert('Game over')
      game = {
        playing: false,
        instructions: [],
        current: 0
      }
    }
  }

  function startGame() {
    game.playing = true
    game.instructions = [
      ...game.instructions,
      colors[Math.floor(Math.random() * colors.length)]
    ]
    showIntructions()
  }
</script>

<article class="flex flex-col justify-center items-center gap-8">
  <button on:click={startGame} disabled={game.playing}>Play </button>
  <div class="grid grid-cols-2 gap-4 max-w-2xl">
    {#each colors as { name, inactive }}
      <Pad on:click={handleColor} disabled={!game.playing} {name} {inactive} />
    {/each}
  </div>
</article>
