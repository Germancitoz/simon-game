<script>
  import { score } from '../store/score.js'
</script>

<article class="mt-4">
  <h3 class="text-center text-xl">{$score['top'] ? `Mejor puntaje: ${$score['top']}` : 'No tienes puntaje registrado' }</h3>
</article>