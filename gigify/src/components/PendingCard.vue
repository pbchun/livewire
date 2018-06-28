<template>
    <b-card>
        <p class="mainInfo">{{pendingEvent.artist}}</p>
        <p class="mainInfo">Date: {{pendingEvent.date}}</p>
        <p class="mainInfo">Venue: The Hi-Dive</p>
        <p class="card-test">Contact: {{pendingEvent.contactName}}</p>
        <p class="card-test">Phone: {{pendingEvent.phone}}</p>
        <p class="card-test">Email: {{pendingEvent.email}}</p>
        <br><img :src="pendingEvent.image">
        <br><b-button vue-router="#" variant="primary" @click.prevent="submitRequest">Approve this Request</b-button>
    </b-card>
</template>

<script>
export default {
    props: ["pendingEvent"]
    
}
</script>

<style scoped>

</style>