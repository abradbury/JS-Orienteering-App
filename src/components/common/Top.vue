<template>
  <header class="top dark">
    <nav role="nav">
      <ul>
        <li>
            <router-link to="/">
              <span class="logo">
                <svg width="50" height="50">
                  <circle cx="25" cy="25" r="20" stroke="#FF00FF" stroke-width="3" fill="none" />
                  <circle cx="25" cy="25" r="15" stroke="#FF00FF" stroke-width="3" fill="none" />
                </svg>
              </span>
              <span>Home</span>
            </router-link>
          </li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/clubs">Clubs</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
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
  height: 5em;
}

.logo svg {
  vertical-align: middle;
}
</style>
