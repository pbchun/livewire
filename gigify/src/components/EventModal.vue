<template>
   <div>
       <header>
           <h1 class='artist-title'>{{clickedEvent.artist}} Live!</h1>
           <h3 class="event-date">{{clickedEvent.date}}</h3>
       </header>
       <main>
           <hr>
            <h5>{{clickedEvent.description}}</h5>
            <hr>
            <iframe class="embed-player"
               width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" 
                :src="clickedEvent.musicSample">
            </iframe> 
       </main>
       <footer>
           
       </footer>
   </div>
</template>

<script>
export default {
  props: ["clickedEvent"]
};
</script>

<style scoped>
.artist-title {
  margin-top: 0px;
  margin-bottom: 5px;
}

.event-date {
  margin-top: 5px;
}

embed-player {
  margin-top: 10px;
}
</style>