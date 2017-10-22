<template>
  <div class="searchBar">
    <h1>{{ msg }}</h1>
    <h2>Boyha</h2>
    <input autofocus v-bind:placeholder="placeholder" type="text" />
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data () {
    return {
      msg: 'dis a search bar',
      placeholder: 'Enter search term...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      border: 1px solid #cbcbcb;
      width: 100%;
      margin: 20px 0;
  }

  table caption {
      color: #000;
      font: italic 85%/1 arial, sans-serif;
      padding: 1em 0;
      text-align: center;
  }

  table td,
  table th {
      border-left: 1px solid #cbcbcb;
      border-width: 0 0 0 1px;
      font-size: inherit;
      margin: 0;
      overflow: visible;
      padding: 0.5em 1em;
  }

  table td:first-child,
  table th:first-child {
      border-left-width: 0;
  }

  table thead {
      background-color: #e0e0e0;
      color: #000;
      text-align: left;
      vertical-align: bottom;
  } */

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

  /*input:focus {
    outline: none;
    border-width: 0 0 4px 0;
    border-color: #777;
  }*/

  form {
    width: 60%;
    margin: 0 auto;
  }

</style>
