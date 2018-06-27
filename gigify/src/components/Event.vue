<template>
    <section class="event-card">
        <div class ='cardText'>
            <h1 class='artistName'>Artist Name</h1>
            <h2 class='dateOfEvent'>Jan 23 2125</h2>
            <p class='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iusto rem, voluptatum ipsam dolorum unde esse deleniti voluptates commodi et 
                magni, a consequatur ea aperiam saepe. A ea exercitationem nemo consequatur. 
            </p>
        </div>
    </section>
</template>

<script>
export default {
  props: ["eventData"]
};
</script>

<style>
.event-card {
  color: white;
  width: 390px;
  height: 325px;
  border: 2px solid black;
  border-radius: 20px;
  background-image: url("https://www.billboard.com/files/styles/900_wide/public/media/worst-album-covers-of-the-80s-thompson-twins-billboard-600x600.jpg");
}

.cardText {
  padding-top: 2em;
  background-color: rgba(59, 59, 59, 0.7);
  border-radius: 20px;
  margin: 1em;
  padding: 1em;
}
</style>
