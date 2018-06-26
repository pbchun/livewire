<template>
    <div>
        <h2>This is the section where the pending events will be generated after an artist submits a request</h2>
        <PendingEvent />
        <button >Manually Add an Event</button>
        <ManuallyAddEvent />
    </div>
</template>

<script>
import PendingEvent from "@/components/PendingEvent";
import ManuallyAddEvent from "@/components/ManuallyAddEvent";
export default {
  components: {
    PendingEvent
  }
};
</script>

<style>
</style>