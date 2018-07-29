<template>
  <header class="top dark">
    <!-- <span class="start">
      <svg width="100" height="100">
        <polygon points="50,25 25,75 75,75" stroke="#FF00FF" stroke-width="5" fill="none" />
      </svg>
    </span>

    <span class="control">
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="30" stroke="#FF00FF" stroke-width="5" fill="none" />
      </svg>
    </span> -->

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

    <!-- <span class="finish">
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="35" stroke="#FF00FF" stroke-width="5" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="#FF00FF" stroke-width="5" fill="none" />
      </svg>
    </span> -->
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
  height: 5em;
}

.logo svg {
  vertical-align: middle;
}
</style>
