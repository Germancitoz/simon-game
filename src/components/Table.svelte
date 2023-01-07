<script>
  const colors = ['red', 'blue', 'yellow', 'green']

  let game = {
    playing : false,
    instructions : [],
    current: 0
  }


  function toggleColor(color) {
    return new Promise((resolve, reject) => {
      document.getElementById(color).classList.add(`text-red-600`)
      setTimeout(() => {
        document.getElementById(color).classList.remove(`text-red-600`)
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
    if (game.instructions[game.current] === event.target.id) {
      if (game.current === game.instructions.length - 1) {
        game.current = 0
        game.instructions = [...game.instructions, colors[Math.floor(Math.random() * colors.length)]]
        showIntructions()
      } else {
        game.current++
      }
    } else {
      alert('Game over')
      game = {
        playing : false,
        instructions : [],
        current : 0
      }
    }
  }


  function startGame() {
    game.playing = true
    game.instructions = [...game.instructions, colors[Math.floor(Math.random() * colors.length)]]
    showIntructions()
    console.log(game.instructions)
  }

</script>

<article class="flex gap-4 ">
  {#each colors as color}
    <button id={color} disabled={!game.playing} on:click={handleColor}>{color}</button>
  {/each}
  <button on:click={startGame} disabled={game.playing}>Play  </button>
</article>