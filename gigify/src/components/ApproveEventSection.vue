<template>
    <div>
        <h2>This is the section where the pending events will be generated after an artist submits a request</h2>
        <PendingEvent />
        <AddAvailableDate />
        <button @click.prevent="toggleEventForm()">Manually Add an Event</button>
        <ManuallyAddEvent v-show="eventFormDisplaying" />
    </div>
</template>

<script>
import PendingEvent from "@/components/PendingEvent";
import ManuallyAddEvent from "@/components/ManuallyAddEvent";
import AddAvailableDate from "@/components/AddAvailableDate";

export default {
  components: {
    PendingEvent,
    ManuallyAddEvent,
    AddAvailableDate
  },
  data() {
    return {
      eventFormDisplaying: false
    };
  },
  methods: {
    toggleEventForm() {
      this.eventFormDisplaying = !this.eventFormDisplaying;
    }
  }
};
</script>

<style>
</style>