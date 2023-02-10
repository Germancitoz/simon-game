<script>
  export let disabled
  export let name
  export let inactive
</script>

<button class="rounded-xl w-36 h-36 sm:w-60 sm:h-60 md:w-64 md:h-64 {inactive}" id={name} disabled={disabled} on:click></button>
