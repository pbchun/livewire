<template>
    <div>
       <div class="approved-card">
        <div>
            <h5>{{date.artist}}</h5>
            <small class="small-date">{{date.date}}</small>
            <p>{{date.email}} | {{date.phone}}</p>
           
        </div>
        <button
                id="return"
                @click.prevent="cancelEvent"
                class="btn"
              > 
                cancel event
         </button>
     </div>
    </div>
</template>

<script>
export default {
  props: ["date"],
  data() {
    return {
      APPROVED_TEMPLATE: "https://arcane-chamber-96667.herokuapp.com/events/"
    }
  },
  methods: {
    cancelEvent() {
      return fetch((this.APPROVED_TEMPLATE + this.date.date), {
        method: "delete"
      }).then(resJSON => {
        console.log(this.APPROVED_TEMPLATE + this.date.date);
        if (resJSON.status === 204)
          console.log("Data, ", this.date, " has been deleted...");
        else console.log("Data, ", this.date + " was unable to be deleted...");
      });
    }
  }
};
</script>

<style scoped>
.small-date {
  color: white;
}
.approved-card {
  background-color: #464444;
  width: 40%;
  box-shadow: 1px 1px 1px orange;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3px;
  padding: 5px;
}

#return {
  height: 50%;
  align-self: center;
}
@media only screen and (max-width: 600px) {
  .approved-card {
    width: 95%;
  }
}
</style>