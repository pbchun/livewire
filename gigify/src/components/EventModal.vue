<template>
   <div>
      
       <header>
           <h1>{{clickedEvent.artist}}</h1>
           <!-- <h1>{{eventData.artist}}</h1>
           <h1>{{event.artist}}</h1> -->

       </header>
       <main>
            <iframe 
            >
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
