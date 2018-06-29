<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html {
  background-color: black;
}

#app {
  background-color: black;

  text-align: center;
}
#nav {
  padding: 30px;
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  color: #f88c19 !important;
  font-family: "Pathway Gothic One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

p,
a {
  color: white;
  font-size: 1.6em;
  letter-spacing: 0.06em;
  font-family: "Sree Krushnadevaraya", serif;
}
</style>
