<template>
    <section class="event-card">
        <div class ='cardText'>
            <h1 class='artistName'>{{artistName}}Artist Name</h1>
            <h2 class='dateOfEvent'>{{date}} Jan 23 2125</h2>
            <p class='description'>{{description}} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iusto rem, voluptatum ipsam dolorum unde esse deleniti voluptates commodi et 
                magni, a consequatur ea aperiam saepe. A ea exercitationem nemo consequatur.
            </p>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
.event-card{
    color: white;
    width: 390px;
    height: 325px;
    border: 2px solid black;
    border-radius: 20px;
    background-image: url('https://i.pinimg.com/736x/e1/fb/cb/e1fbcb16e52307cd4b3aa43cf9e23d68--s-hair-bands-s-rock-bands.jpg');
}

.cardText{
    padding-top: 2em;
    background-color: rgba(59, 59, 59, 0.5)
}
</style>
