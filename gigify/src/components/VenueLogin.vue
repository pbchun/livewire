<template>
    <section>
        <h2>This is where the dummy login form component lives</h2>
        <form action="">
            <a class="loginLabel">User Name</a>
            <input type="text">
            <a class="loginLabel">Password</a>
            <input type="text">
            <button @click.prevent="toggleDisplay">Login</button>
        </form>
    </section>
</template>

<script>
export default {
  name: "venue-login",
  props: ["isDisplaying", "toggleDisplay"]
};
</script>

<style>

form{
    display:flex;
    flex-direction: column;
    align-items: center;

}
form a{
    text-align: left;
}
</style>