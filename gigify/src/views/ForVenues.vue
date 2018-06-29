<template>
    <div class="for-venues">
      <Header />
        <main>
            <VenueLogin :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="isDisplaying" />
            <ApproveEventSection :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="!isDisplaying" />
        </main>
         <VenueFooter class="footsticker" />
        

      
        
    </div>
</template>

<script>
import VenueLogin from "@/components/VenueLogin";
import ApproveEventSection from "@/components/ApproveEventSection";
import Header from "@/components/Header";
import VenueFooter from "@/components/VenueFooter";

export default {
  name: "for-venues",
  components: {
    VenueLogin,
    ApproveEventSection,
    Header,
    VenueFooter
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
.for-venues {
  font-family: "Pathway Gothic One", sans-serif;
}
.footsticker {
  margin-bottom: 0px;
  position: relative;
  bottom: 0px;
}
</style>
