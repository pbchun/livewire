<template>
    <main class="carousel">
       <h2>Events</h2>
      <b-modal 
             :hide-footer="true"
             size="lg"
             id="modal1">
           <EventModal />
        </b-modal>
        <b-modal 
             :hide-footer="true"
             size="lg"
             id="modal2">
           <EventModal />
        </b-modal>
        <b-modal 
             :hide-footer="true"
             size="lg"
             id="modal3">
           <EventModal />
        </b-modal>
       
        <carousel-3d id="carousel" style="height:70%;" 
        :controls-visible="true" 
        :autoplay="true"
        :autoplayTimeout="8500"
        :controls-width="80"
        :height="325" 
        :width="390" 
        :clickable="true"
        :inverse-scaling="1000" :space="600"
        >
        <slide :index="0"  class="slide">
            <div v-b-modal.modal1>
             <Event />
            </div> 
          </slide>
          <slide :index="1"  class="slide">
            <div v-b-modal.modal2>
              <Event />
            </div> 
          </slide>
          <slide :index="2"  class="slide">
            <div v-b-modal.modal3>
              <Event />
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
  data() {
    return {
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  }
};
</script>

<style scoped>
#carousel {
  margin-top: 55px;
  margin-bottom: 35px;
}

.slide {
  border: none;
  border-radius: 20px;
}

.slide:hover {
  margin-top: 8px;
}
</style>