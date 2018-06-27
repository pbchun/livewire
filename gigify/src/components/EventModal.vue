<template>
   <div>
       <header>
           <h1>{{eventData[2].events[0].artist}}</h1>
       </header>
       <main>
           <p>this band sux. Def dont go</p>
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

