<template>
  <main class="carousel">
    <h2>Events</h2>
    <b-modal
      v-model="modalShow"
      :hide-footer="true"
      size="lg"
    >
      <EventModal
        :clickedEvent="clickedEvent"
        :eventData="eventData"
      />
    </b-modal>
    <carousel-3d 
      id="carousel"
      style="height:70%;"
      :controls-visible="true"
      :autoplay="true"
      :autoplayTimeout="8500"
      :controls-width="80"
      :height="325"
      :width="390"
      :clickable="true"
      :inverse-scaling="1000"
      :space="600">
        <slide 
          id="slide" 
          :index="eventData[1].events.indexOf(event)" 
          v-for="event in eventData[1].events" 
          :key="event.id"
        >
          <div @click="populateModal(event)">
            <Event
              :clickedEvent="clickedEvent"
              :modalShow="modalShow"
              :event="event"
              :eventData="eventData[1].events[eventData[1].events.indexOf(event)]" 
            />
          </div>
        </slide>
      </carousel-3d>
  </main>
</template>

<script>
  import BootstrapVue from "bootstrap-vue";
  import {
    Carousel3d,
    Slide
  } from "vue-carousel-3d";
  import Event from "@/components/Event";
  import EventModal from "@/components/EventModal";
  
  export default {
    name: "event-section",
    components: {
      Event,
      Carousel3d,
      Slide,
      BootstrapVue,
      EventModal
    },
    props: ["eventData", "populateModal", "clickedEvent", "modalShow", "event"],
  
    data() {
      return {
        API: {
          DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
          APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
          REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
        }
      };
    }
  };
</script>

<style scoped>
  #slide {
    border: none;
  }
  
  #carousel {
    margin-top: 55px;
    margin-bottom: 35px;
  }
</style>