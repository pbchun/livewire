<template>
    <div>
        <ApprovedDate id="flexit" :date="date" v-for="date in eventData[1].events" :key="date.id" />
    </div>
</template>

<script>
import ApprovedDate from "@/components/ApprovedDate";

export default {
  components: {
    ApprovedDate
  },
  props: ["eventData"]
};
</script>

<style>
</style>