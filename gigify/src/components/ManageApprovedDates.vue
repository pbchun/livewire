<template>
    <div class="approved-list">
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
.approved-list {
  width: 95%;
  margin-left: 31%;
}
@media only screen and (max-width: 600px) {
  .approved-list {
    margin-left: 3%;
  }
}
</style>