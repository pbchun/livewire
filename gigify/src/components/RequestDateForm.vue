<template>
    <div>
        <h1>Request a Date</h1>
    <form class="form-inline requestForm" :submitRequest="submitRequest" v-on:submit.prevent="submitRequest">
        <div class="form-group row">
          <input v-model="request.date" class="form-control mb-2 mr-sm-2" type="text" name="date" placeholder="Date">
        </div>
        <div class="form-group row">
          <input v-model="request.artistName" class="form-control mb-2 mr-sm-2" type="text" name="artistName" placeholder="Artist Name">
        </div>
        <div class="form-group row">
          <input v-model="request.contactName" class="form-control mb-2 mr-sm-2" type="text" name="contactName" placeholder="Contact Name">
        </div>
        <div class="form-group row">
          <input v-model="request.phone" class="form-control mb-2 mr-sm-2" type="text" name="phone" placeholder="Phone Number">
        </div>
        <div class="form-group row">
          <input v-model="request.email" class="form-control mb-2 mr-sm-2" type="text" name="email"  placeholder="Email">
        </div>
        <div class="form-group row">
          <input v-model="request.website" class="form-control mb-2 mr-sm-2" type="text" name="website"  placeholder="Website">
        </div>
        <div class="form-group row">
          <input v-model="request.musicSample" class="form-control mb-2 mr-sm-2" type="text" name="phone" placeholder="Music Sample URL">
        </div>
        <div class="form-group row">
          <input v-model="request.description" name="description" class="form-control mb-2 mr-sm-2" placeholder="Short Artist Description">
        </div>
        <input type="submit" id="submitButton" name="submit" value="Submit" class="btn btn-danger"/>
    </form>
        <footer>
            <button @click.prevent="toggleDisplay">go back to available dates</button>
        </footer>
    </div>
</template>

<script>
export default {
  name: "request-date-form",
  props: ["isDisplaying", "toggleDisplay"],
  data() {
    return {
      request: {
        date: "",
        artistName: "",
        contactName: "",
        phone: "",
        email: "",
        website: "",
        musicSample: "",
        description: ""
      },
      API_URL: ""
    };
  },
  methods: {
    submitRequest() {
      this.addRequest(this.request);
      this.postRequest();
      this.request = {
        date: "",
        artistName: "",
        contactName: "",
        phone: "",
        email: "",
        website: "",
        musicSample: "",
        description: ""
      };
    },
    postRequest() {
      return fetch(this.API_URL, {
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.request)
      });
    }
  }
};
</script>

<style>
.requestForm {
  
}
input {
  width: 50%;
}
#submitButton {
  width:20%;
}
button {
  
}


</style>
