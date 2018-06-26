<template>
  <div class="high-dive">
    <header>
      <h1>Welcome to The Hi-Dive</h1>
    </header>
    <EventSection />
    <VenueFooter />
  </div>
</template>

<script>
import VenueFooter from "@/components/VenueFooter";
import EventSection from "@/components/EventSection";

export default {
  name: "high-dive",
  components: {
    VenueFooter,
    EventSection
  }
};
</script>

<style>
</style>