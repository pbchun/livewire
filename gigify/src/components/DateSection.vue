<template>
    <div>
        <header class="date-section-header">
            <h1>Available Dates Page</h1>
            <h3>This is the section that will house the dates available </h3>
            <p>each date component will be dynamically generated via "v-for" in the AvailableDate component-element </p>
        </header>
        <section class="date-section">
            <AvailableDate :toggleDisplay="toggleDisplay" :showDate="showDate" :passDate="passDate" :eventData="eventData" />
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
  props: ["isDisplaying", "toggleDisplay", "API", "availableDates", "eventData", "showDate", "passDate"],
  methods: {}
};
</script>


