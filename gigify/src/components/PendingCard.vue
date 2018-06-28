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
    lengthOfEvents: undefined,
    acceptedEvent: {
        date:"",
        artist: "",
        venue: "",
        contactName: "",
        phone: "",
        email: "",
        website: "",
        musicSample: "",
        image: "",
        description: ""
},
        }
    },
   methods: {
        submitRequest() {
      // this.addRequest(this.request);
      console.log(this.API.APPROVED_SHOWS)
      this.acceptedEvent = this.pendingEvent;
      console.log(this.pendingEvent)
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