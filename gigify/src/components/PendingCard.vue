<template>
    <b-card>
        <p class="mainInfo">{{pendingEvent.artist}}</p>
        <p class="mainInfo">Date: {{pendingEvent.date}}</p>
        <p class="mainInfo">Venue: {{pendingEvent.venue}}</p>
        <p class="card-test">Contact: {{pendingEvent.contactName}}</p>
        <p class="card-test">Phone: {{pendingEvent.phone}}</p>
        <p class="card-test">Email: {{pendingEvent.email}}</p>
        <br><img :src="pendingEvent.image">
        <br><b-button vue-router="#" variant="primary" @click.prevent="submitRequest">Approve this Request</b-button>
    </b-card>
</template>

<script>
export default {
    props: ["pendingEvent", "API"],
    data () {
return {
    acceptedEvent: {
        date: this.pendingEvent.date,
        artist: this.pendingEvent.artist,
        venue: this.pendingEvent.venue,
        contactName: this.pendingEvent.contactName,
        phone: this.pendingEvent.phone,
        email: this.pendingEvent.email,
        website: this.pendingEvent.website,
        musicSample: this.pendingEvent.musicSample,
        image: this.pendingEvent.image,
        description: this.pendingEvent.description
},
        }
    },
   methods: {
        submitRequest() {
      this.postEvent();
    },
    postEvent() {
      const postOptions = {
        method: 'POST',
        body: JSON.stringify(this.acceptedEvent),
        headers: {'Content-Type':'application/json'}
      }
      fetch(this.API.APPROVED_SHOWS, postOptions)
        .then(res => res.json())
        .then(resJSON => console.log(resJSON))

    }
  },   
}
</script>

<style scoped>

</style>