<template>
    <section>
        <h2>This is where the dummy login form component lives</h2>
        <form action=""></form>
        <button @click.prevent="toggleDisplay">Login</button>
    </section>
</template>

<script>
export default {
  name: "venue-login",
  props: ["isDisplaying", "toggleDisplay"]
};
</script>

