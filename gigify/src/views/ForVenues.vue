<template>
    <div>
      <Header />
        <main>
            <VenueLogin :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="isDisplaying" />
            <ApproveEventSection :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="!isDisplaying" />
        </main>
        <footer>
          <router-link to="/">Home</router-link>
        </footer>
        
    </div>
</template>

<script>
import VenueLogin from "@/components/VenueLogin";
import ApproveEventSection from "@/components/ApproveEventSection";
import Header from "@/components/Header";


export default {
  name: "for-venues",
  components: {
    VenueLogin,
    ApproveEventSection,
    Header
  },
  data() {
    return {
      isDisplaying: true,

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
  }
};
</script>

<style>
</style>
