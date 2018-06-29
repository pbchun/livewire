```<template>
  <div id='backgroundForm'>
    <div id='request'>
        <h1>Add an upcoming Open Date</h1>
        <form 
                class="add-upcoming-form"
                :submitAddedEvent="postAvailableDate" 
                v-on:submit.prevent="postAvailableDate">
               <input 
                    v-model="event.date" 
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="date"
                    placeholder="Date of event (MM-DD-YYYY Format)"
                />
               <input
                    v-model="event.venue"
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="venue"
                    placeholder="Hi-Dive"
                    readonly
               />
                <input 
                    type="submit"
                    id="submitButton"
                    name="submit"
                    value="Submit"
                    class="btn btn-danger"
                />
            </form>
    </div>
  </div>
    
</template>

<script>
export default {
  props: ["API", "availableDates"],
  data() {
    return {
      event: {
        date: "",
        venue: ""
      }
    };
  },
  methods: {
    postAvailableDate() {
      return fetch(this.API.DATE_LISTINGS, {
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.event)
      })
      .then(res => res.json())
      .then(resJSON => console.log(resJSON))
    }
  }
};
</script>

<style>
.add-upcoming-form {

}
#submitButton {
  font-size: 25px;
  margin: 40px;
  border-radius: 300px;
  background-color: #f88c19;
  color: white;
  width: 50%;
}
#request {
    background-color: RGB(70,68,68);
    padding: 1% 2% 2% 2%;
    margin-top: 5%;
    width: 50%;
}
#backgroundForm {
display: flex;
justify-content: center;
background-color: black;
}
#addForm {
  background-color: RGB(70, 68, 68);
  padding: 1% 2% 2% 2%;
  margin-top: 5%;
  /* width: 75%; */
  width: 50%;
}
#backgroundForm {
  display: flex;
  justify-content: center;
  background-color: black;
}
</style>```
Message Input

Message Jose Trujillo, Mike Lavin, Jacob Hinkston, Peter Chun