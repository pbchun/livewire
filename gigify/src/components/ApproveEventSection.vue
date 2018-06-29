<template>
    <div id="manage">
        <h2>Submitted Artist Requests</h2>
        <PendingEvent 
          :approvedShow="approvedShow"
        />

        <button
          class="add-event"
          @click="toggleApprovedForm()"
        >
          Create An Upcoming Show
        </button>

        <button
          class="add-event"
          @click="togglePendingForm()"
        >
          List an Open Show Date
          </button>
        <button
          class="add-event"
          @click="toggleApprovedDates()"
        >
          Manage Upcoming Shows
          </button>          
        <ManuallyAddEvent
          v-show="ApprovedFormDisplaying"
          :API="API"
        />          
        <AddAvailableDate
        v-show="PendingFormDisplaying"
        :API="API"
        />    
        <ManageApprovedDates
        v-show="ApprovedDatesDisplaying"
        :eventData="eventData"
        />

    </div>
</template>

<script>
import PendingEvent from "@/components/PendingEvent";
import AddAvailableDate from "@/components/AddAvailableDate";
import ManuallyAddEvent from "@/components/ManuallyAddEvent";
import PendingEventVue from "./PendingEvent.vue";
import ManageApprovedDates from "@/components/ManageApprovedDates";

export default {
  components: {
    PendingEvent,
    AddAvailableDate,
    ManuallyAddEvent,
    ManageApprovedDates
  },
  data() {
    return {
      PendingFormDisplaying: false,
      ApprovedFormDisplaying: false,
      ApprovedDatesDisplaying: false,
      availableDates: [],
      eventData: [],
      approvedShow: [],
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },

  methods: {
    togglePendingForm() {
      this.PendingFormDisplaying = !this.PendingFormDisplaying;
      this.ApprovedFormDisplaying = false;
      this.ApprovedDatesDisplaying = false;
    },
    toggleApprovedForm() {
      this.ApprovedFormDisplaying = !this.ApprovedFormDisplaying;
      this.PendingFormDisplaying = false;
      this.ApprovedDatesDisplaying = false;
    },
    toggleApprovedDates() {
      this.ApprovedDatesDisplaying = !this.ApprovedDatesDisplaying;
      this.PendingFormDisplaying = false;
      this.ApprovedFormDisplaying = false;
    }
  },
  async mounted() {
    Promise.all([
      fetch(this.API.DATE_LISTINGS).then(res => res.json()),
      fetch(this.API.APPROVED_SHOWS).then(res => res.json()),
      fetch(this.API.REQUESTED_SHOWS).then(res => res.json())
    ]).then(res => {
      this.eventData = res;
    });
  }
};
</script>

<style>
#manage {
  margin-bottom: 6%;
}
.add-event {
  background-color: rgb(70, 68, 68);
  border-radius: 4px;
  border: 1px solid rgb(70, 68, 68);
  color: white;
  font-size: 25px;
  margin: 40px;
}
</style>