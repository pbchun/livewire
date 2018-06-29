<template>
    <div>
    <b-card id="card-background">
        <p class="mainInfo">{{pendingEvent.artist}}</p>
        <p class="mainInfo">Date: {{pendingEvent.date}}</p>
        <p class="card-test">Contact: {{pendingEvent.contactName}}</p>
        <p class="card-test">Phone: {{pendingEvent.phone}}</p>
        <p class="card-test">Web: {{pendingEvent.website}}</p>
        <p class="card-test">Email: {{pendingEvent.email}}</p>
        <br><img :src="pendingEvent.image">
        <div class="button-section">
            <b-button id="white" vue-router="#" variant="secondary" @click="submitRequest">Approve</b-button>
            <b-button id="white" vue-router="#" variant="secondary" @click="deleteEvent">Reject</b-button>
        </div>
    </b-card>
   
    </div>
</template>

<script>
import VenueFooter from "@/components/VenueFooter";
export default {
  props: ["pendingEvent", "API"],
  components: {
    VenueFooter
  },
  data() {
    return {
      REQUESTED_TEMPLATE: `https://pure-taiga-70535.herokuapp.com/events/${
        this.pendingEvent.date
      }`,
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
      }
    };
  },
  methods: {
    submitRequest() {
      this.postEvent();
    },
    postEvent() {
      const postOptions = {
        method: "POST",
        body: JSON.stringify(this.acceptedEvent),
        headers: { "Content-Type": "application/json" }
      };
      fetch(this.API.APPROVED_SHOWS, postOptions)
        .then(res => {
          if (res.status == 201) this.deleteEvent();
          else console.error(res.status);
          return res.json();
        })
        .then(resJSON =>
          console.log("DATA has been posted to API_APPROVED_SHOWS -> ", resJSON)
        );
    },
    deleteEvent() {
      return fetch(this.REQUESTED_TEMPLATE, {
        method: "delete"
      }).then(resJSON => {
        if (resJSON.status === 204)
          console.log("Data, ", this.pendingEvent, " has been deleted...");
        else
          console.log(
            "Data, ",
            this.pendingEvent + " was unable to be deleted..."
          );
      });
    }
  }
};
</script>

<style scoped>
.button-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
}

#white {
  color: white;
}

#card-background {
  background: #464444;
  box-shadow: 0px 1px 2px orange;
}
</style>