<template>
    <main class="carousel">
       <h2>Events</h2>
        <b-modal  
             :hide-footer="true"
             size="lg"
             id='modal1'>
           <EventModal :eventData="eventData" />
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
        <slide :index="eventData[1].events.indexOf(event)" v-for="event in eventData[1].events" :key="event.id">
<<<<<<< HEAD
          <div v-b-modal.modal1>
             <Event :eventData="eventData" />
          </div> 
=======
          <Event :eventData="eventData[1].events[eventData[1].events.indexOf(event)]" />
>>>>>>> 1ac1db5912d25d06eb22a8991f30fe2324777ef7
        </slide> 
          <!-- <slide :index="1"  class="slide">
            <div v-b-modal.modal2>
              <Event />
            </div> 
          </slide>
          <slide :index="2"  class="slide">
            <div v-b-modal.modal3>
              <Event />
            </div>
          </slide> -->
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
  props: ["eventData"],
  methods: {
    showModal() {}
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