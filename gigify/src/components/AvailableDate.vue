<template>
    <div class="date-card">
        <header>Date Header goes here</header>
        <main>Date Details here</main>
        <footer>
            <button @click.prevent="toggleDisplay">Request to book this Date</button>
        </footer>
    </div>
</template>

<script>
export default {
  name: "available-date",
  props: ["toggleDisplay"]
};
</script>

<style>
</style>