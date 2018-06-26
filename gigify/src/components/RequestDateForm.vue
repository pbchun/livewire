<template>
    <div>
        <h1>put request form here</h1>
        <form action="">

        </form>
        <footer>
            <button @click.prevent="toggleDisplay">go back to available dates</button>
        </footer>
    </div>
</template>

<script>
export default {
  name: "request-date-form",
  props: ["isDisplaying", "toggleDisplay"]
};
</script>

<style>
</style>
