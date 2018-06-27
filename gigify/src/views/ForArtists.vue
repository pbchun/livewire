<template>
    <div>
        <main>
            <DateSection :availableDates="availableDates" :API="API" :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="isDisplaying" />
            <RequestDateForm :API="API" :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="!isDisplaying" />
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
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },
  methods: {
    toggleDisplay() {
      this.isDisplaying = !this.isDisplaying;
    }
  },
  async mounted() {
    fetch(this.API.DATE_LISTINGS)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.availableDates = res;
        console.log(res);
      });
  }
};
</script>

<style>
</style>