<template>
    <div>
        <main>
            <h1>{{eventData[1].events[1].artist}}</h1>
            <DateSection :availableDates="availableDates" :API="API" :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="isDisplaying" :eventData="eventData" :showDate="showDate" :passDate="passDate" />
            <RequestDateForm :API="API" :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="!isDisplaying" :showDate="showDate" />
        </main>
    </div>
</template>

<script>
import DateSection from "@/components/DateSection";
import RequestDateForm from "@/components/RequestDateForm";

export default {
  name: "for-artists",
  components: {
    DateSection,
    RequestDateForm
  },
  data() {
    return {
      isDisplaying: true,
      availableDates: [],
      eventData: [],
      showDate: "",
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },
  methods: {
    toggleDisplay() {
      this.isDisplaying = !this.isDisplaying;
    },
    passDate(event) {
      this.showDate = event;
      console.log(this.showDate)
    }
  },
  async mounted() {
    Promise.all([
      fetch(this.API.DATE_LISTINGS).then(res => res.json()),

      fetch(this.API.APPROVED_SHOWS).then(res => res.json()),

      fetch(this.API.REQUESTED_SHOWS).then(res => res.json())
    ]).then(res => {
      this.eventData = res;
      console.log(this.eventData);
    });
  }
};
</script>

<style>
</style>