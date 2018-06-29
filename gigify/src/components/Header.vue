<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/">
        <div class="title">
            <img class="logo" src="Logo-no-background.png" alt="livewire">
            <h1 class="title text">LIVEWIRE</h1>
        </div>
      </router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  max-width: 40px;
  height: auto;
}

nav {
  background-color: RGB(70, 68, 68);
  margin-bottom: 1%;
  max-height: 50px;
}
.title {
  display: flex;
  justify-content: flex-start;
  padding-top: 5px;
  font-size: 1.1rem;
}

.text {
  margin-left: 12px;
  letter-spacing: 0.4em;
}
</style>