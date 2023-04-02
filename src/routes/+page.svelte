
<script context="module">

  console.log('index')

</script>

<script>

  let numero = 0

</script>

<svelte>

  <h1>Operacion { numero }</h1>

  <button on:click={ () => numero++}>+</button>
  <button on:click={ () => numero--}>-</button>

</svelte>

