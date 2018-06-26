<template>
    <main class="carousel">
        <h1>This is where the carousel of events will live</h1>
        <Event />
    </main>
</template>

<script>
import Event from "@/components/Event";

export default {
  name: "event-section",
  components: {
    Event
  }
};
</script>

<style>
</style>