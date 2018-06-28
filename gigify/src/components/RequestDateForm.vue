<template>
    <div>
      <h1>Request a Date</h1>
      <form 
        class="requestForm"
        :submitRequest="submitRequest"
        v-on:submit.prevent="submitRequest"
      >
        <input 
          v-model="request.date"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="date"
          :placeholder=showDate
          readonly
        >
        <input 
          v-model="request.artist"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="artistName"
          placeholder="Artist Name"
        >
        <input
          v-model="request.contactName"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="contactName"
          placeholder="Contact Name"
        >
        <input
          v-model="request.phone"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="phone"
          placeholder="Phone Number"
        >
        <input
          v-model="request.email"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="email"
          placeholder="Email"
        >
        <input
          v-model="request.website"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="website"
          placeholder="Website"
        >
        <input
          v-model="request.musicSample"
          class="form-control mb-2 mr-sm-2"
          type="text"
          name="phone"
          placeholder="Music Sample URL"
        >
        <input
          v-model="request.description"
          name="description"
          class="form-control mb-2 mr-sm-2"
          placeholder="Short Artist Description">
        <input
          type="submit"
          id="submitButton"
          name="submit"
          value="Submit"
          class="btn btn-danger"
        />
    </form>
        <footer>
            <button
              id="return"
              @click.prevent="toggleDisplay"
            > 
              Go back to available dates. 
            </button>
        </footer>
    </div>
</template>

<script>
export default {
  name: "request-date-form",
  props: ["isDisplaying", "toggleDisplay", "API", "showDate"],
  data() {
    return {
      request: {
        date: "",
        artist: "",
        contactName: "",
        phone: "",
        email: "",
        website: "",
        musicSample: "",
        image: "",
        description: ""
      }
    };
  },
  methods: {
    submitRequest() {
      this.request.date = this.showDate;
      this.postRequest();
      this.request = {
        date: "",
        artist: "",
        contactName: "",
        phone: "",
        email: "",
        website: "",
        musicSample: "",
        image: "",
        description: ""
      };
    },
    postRequest() {
      const postOptions = {
        method: "POST",
        body: JSON.stringify(this.request),
        headers: { "Content-Type": "application/json" }
      };
      fetch(this.API.REQUESTED_SHOWS, postOptions)
        .then(res => res.json())
        .then(resJSON => console.log(resJSON));
    }
  }
};
</script>

<style>
.requestForm {
  margin-left: 40%;
  margin-right: 40%;
}

input {
  width: 50%;
}

#submitButton {
  font-size: 25px;
  margin: 40px;
  border-radius: 300px;
}

#return {
  background-color: #ffffff;
  border: 0px;
  color: #0056b3;
  text-decoration: underline;
}

.form-group {
  display: block;
  color: red;
}

div h1 {
  margin: 40px;
}
</style>