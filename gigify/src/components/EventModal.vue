<template>
   <div>
       <header>
           <h1>{{eventData[2].events[0].artist}}</h1>
       </header>
       <main>
            <iframe 
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe> 
       </main>
       <footer>
           
       </footer>
   </div>
</template>

<script>
export default {
  props: ["eventData"]
};
</script>

