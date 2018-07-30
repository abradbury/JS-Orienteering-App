<template>
  <header class="top">

    <nav role="nav">
      <ul>
        <li>
            <router-link to="/">
              <span>Home</span>
            </router-link>
          </li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/clubs">Clubs</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
        <li><router-link to="/person">Person</router-link></li>
      </ul>
    </nav>

  </header>
</template>

<script>
export default {
  name: 'top'
}
</script>

<<style>
header {
  display: grid;
  align-items: center;
  text-align: right;
  height: 5em;
}

.logo svg {
  vertical-align: middle;
}
</style>
