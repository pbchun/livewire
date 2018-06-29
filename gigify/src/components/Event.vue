<template>
  <section class="event-card">
    <img 
      className=""
      :src="event.image"
      alt="">
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
.dateOfEvent {
  text-shadow: 1px 1px 1px black;
}
.artistName {
  margin-bottom: 5px;
  margin-left: 34px;
  text-shadow: 1px 1px 2px black;
  letter-spacing: 0.22em;
}

.event-text {
  position: absolute;
  margin-left: 13px;
  bottom: 0px;
}

.event-card {
  width: 100%;
  height: 101.8%;
  border: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
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
  border-radius: 7px;
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
</style>
// Message Input

// Message Reed Black, Mike Lavin, Jacob Hinkston, Peter Chun