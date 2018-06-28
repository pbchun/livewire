```<template>
      
                    
    
    <section class="event-card" >
        <img className=""
            :src="event.image" 
            alt=""
        >
        <div class='tintlayer'>
            <div class="event-text">
                <h1 class='artistName'>{{event.artist}}</h1>
                <h5 class='dateOfEvent'>{{event.date}}</h5>
                <!-- <p class='description'>{{eventData.description}}</p> -->
            </div>     
        </div>
    </section>         
</template>

<script>
import EventModal from "@/components/EventModal";

export default {
  props: ["eventData", "clickedEvent", "modalShow", "event"],
  components: {
    EventModal
  }
};
</script>

<style>
.artistName {
  margin-bottom: 5px;
  margin-left: 34px;
}
.event-text {
  position: absolute;
  margin-left: 13px;
  bottom: 0px;
}

.event-card {
  color: silver;
  text-shadow: 0px 1px 2px black;
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
.tintlayer {
  padding-top: 2em;
  background-color: rgba(59, 59, 59, 0.4);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: left;
  align-items: end;
}
.cardText div {
  padding-left: 20px;
}
.tintlayer:hover {
  background-color: rgba(59, 59, 59, 0.6);
}
</style>```
Message Input

Message Reed Black, Mike Lavin, Jacob Hinkston, Peter Chun