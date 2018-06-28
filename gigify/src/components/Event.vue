<template>
        <div>
                    
                   
                    <section class="event-card" >
                        <img className=""
                            :src="event.image" 
                            alt=""
                        >
                        <div class ='cardText'>
                            <div>
                                <h1 class='artistName'>{{event.artist}}</h1>
                                <h5 class='dateOfEvent'>{{event.date}}</h5>
                                <!-- <p class='description'>{{eventData.description}}</p> -->
                            </div>     
                        </div>
                    </section>
                 </div>
                
      
             
       
</template>

<script>
import BootstrapVue from "bootstrap-vue";
import EventModal from "@/components/EventModal";

export default {
  props: ["eventData", "clickedEvent", "modalShow", "event"],
  components: {
    EventModal
  }
};
</script>

<style>
.event-card {
  width: 390px;
  height: 325px;
  border: none;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.event-card img {
  /* border-radius: 20px; */
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}
.cardText {
  padding-top: 2em;
  background-color: rgba(59, 59, 59, 0.4);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: left;
  align-items: end;
}
.cardText div {
  padding-left: 20px;
}
.cardText:hover {
  background-color: rgba(59, 59, 59, 0.7);
}
</style>
