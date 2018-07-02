<template>
  <main class="carousel">
    <h2>Upcoming Events</h2>
    <b-modal
      v-model="modalShow"
      :hide-footer="true"
      :body-bg-variant="bodyBgVariant"
      :header-bg-variant="headerBgVariant"
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
      :display="3"
      :autoplayTimeout="8500"
      :controls-width="80"
      :height="340"
      :width="440"
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
import { Carousel3d, Slide } from "vue-carousel-3d";
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
      bodyBgVariant: "dark",
      headerBgVariant: "dark",
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
  box-shadow: 5px 5px 35px black;
  border-radius: 7px;
  height: 100%;
  width: 100%;
  background: none;
  margin-bottom: px;
}

#carousel {
  margin-top: 55px;
  margin-bottom: 35px;
  width: 90%;
}

#carousel .carousel-3d-container {
  margin-bottom: 20px;
  margin-top: 0px;
}

.carousel-3d-container[data-v-c06c963c][data-v-5c58899b] {
  padding-top: 0px;
}

.carousel-3d-container[data-v-c06c963c] {
  padding-bottom: 32px;
  padding-top: 20px;
}
</style>