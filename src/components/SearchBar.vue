<template>
  <div class="searchBar">
    <form>
      <input autofocus v-bind:placeholder="placeholder" type="search" aria-describedby="searchHint" />
      <input type="submit" value="Search">
    </form>
    <span id="searchHint">{{ hint }}</span>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data () {
    return {
      placeholder: 'Enter search term...',
      hint: 'Some search hint...'
    }
  }
}
</script>

<style scoped>
  input {
      width: 100%;
      height: 2em;
      margin: 0.5em 0;
      font-size: 2em;
      font-weight: 100;
      border-width: 0 0 1px 0;
      border-color: #777;

      padding: 10px;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box;    /* Firefox, other Gecko */
      box-sizing: border-box;         /* Opera/IE 8+ */
  }

  form {
    width: 60%;
    margin: 0 auto;
  }

</style>
