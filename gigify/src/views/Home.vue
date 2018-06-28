<template>
  <div class="home">
    <header>
        <h1>This is the Homepage -the initial landing page</h1>
    </header>
    <main>
        <p>write some shit about this shit</p>
        <router-link to="/HighDive">Checkout wassup at High-Dive</router-link>
       
    </main>
    <footer>
      <router-link to="/ForVenues">Venue Login</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>