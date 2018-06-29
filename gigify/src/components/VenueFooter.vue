<template>
    <footer class="venue-footer">
        <div class="links">
            <router-link to="/About">About Us</router-link>
            <router-link to="/ForArtists">View Available Dates</router-link>
            <router-link to="/ForVenues">Venue Login</router-link>
        </div>
        <p>Copyright 2018. Livewire</p>
    </footer>
</template>

<script>
    export default {};
</script>

<style>
    .venue-footer {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        padding-top: 1.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgb(70, 68, 68);
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 0;
    }

    p {
        color: white;
        margin-bottom: 0;
        margin-top: 0;
        font-size: 0.7em;
        text-align: left;
    }

    .venue-footer a {
        padding-left: 3vh;
        padding-right: 3vh;
        color: #f88c19;
        font-size: 1.1em;
    }

    .venue-footer a:hover {
        text-decoration: none;
        color: white;
    }


</style>