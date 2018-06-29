<template>
    <div>
        <header class="date-section-header">
            <h1>The Hi-Dive's Available Dates</h1>
        </header>
        <section class="date-section">
            <AvailableDate 
                :toggleDisplay="toggleDisplay"
                :showDate="showDate"
                :passDate="passDate"
                :eventData="eventData" 
            />
        </section>
    </div>
</template>

<script>
import AvailableDate from "@/components/AvailableDate";

export default {
  name: "date-section",
  components: {
    AvailableDate
  },
  props: [
    "isDisplaying",
    "toggleDisplay",
    "API",
    "availableDates",
    "eventData",
    "showDate",
    "passDate"
  ],
  methods: {}
};
</script>

<style>
.date-section {
  margin-bottom: 22%;
}
</style>


