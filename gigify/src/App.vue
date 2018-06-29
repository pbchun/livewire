<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html {
  background: url("/texture.jpg");
}

#app {
  text-align: center;
  background: url("/texture.jpg");
}

body {
  background: url("/texture.jpg");
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
a,
button {
  color: #f88c19 !important;
  font-family: "Pathway Gothic One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
h1,
h2 {
  text-shadow: 1px 0px 1px silver;
}
p {
  color: white;
  font-size: 1.6em;
  letter-spacing: 0.06em;
  font-family: "Sree Krushnadevaraya", serif;
}
</style>
