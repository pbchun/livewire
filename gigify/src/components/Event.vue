<template>
    <section class="event-card" >
        <img className=""
            :src="eventData.image" 
            alt=""
        >
        <div class ='cardText'>
         <div>
            <h1 class='artistName'>{{eventData.artist}}</h1>
            <h5 class='dateOfEvent'>{{eventData.date}}</h5>
            <!-- <p class='description'>{{eventData.description}}</p> -->
         </div>
            

        </div>
      
    </section>
</template>

<script>
export default {
  props: ["eventData"],

};
</script>

<style>
    .event-card {
        color: white;
        width: 390px;
        height: 325px;
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .event-card img{
        /* border-radius: 20px; */
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
    }
    .cardText {
        padding-top: 2em;
        background-color: rgba(59, 59, 59, 0.4);
        border-radius: 6px;
        width: 100%;
        height: 100%;
        position: absolute;
        top:0px;
        display: flex;
        justify-content: left;
        align-items: end;
    }
    .cardText div{
        padding-left: 20px;
    }
    .cardText:hover{
        background-color: rgba(59, 59, 59, 0.7);
    }

</style>
