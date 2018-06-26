<template>
    <main class="carousel">
       <h1>This is where the carousel of events will live</h1>
      <b-modal 
             :header-bg-variant="headerBgVariant"
             :hide-footer="true"
             :body-bg-variant="bodyBgVariant"
             :body-text-variant="bodyTextVariant"
             size="lg"
             id="modal1">
           <EventModal />
        </b-modal>
        <b-modal 
             :header-bg-variant="headerBgVariant"
             :hide-footer="true"
             :body-bg-variant="bodyBgVariant"
             :body-text-variant="bodyTextVariant"
             size="lg"
             id="modal2">
           <EventModal />
        </b-modal>
        <b-modal 
             :header-bg-variant="headerBgVariant"
             :hide-footer="true"
             :body-bg-variant="bodyBgVariant"
             :body-text-variant="bodyTextVariant"
             size="lg"
             id="modal3">
           <EventModal />
        </b-modal>
       
        <carousel-3d id="shorter" style="height:70%;" 
        :controls-visible="true" 
        :autoplay="true"
        :autoplayTimeout="4500"
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
  }
};
</script>

<style>
</style>