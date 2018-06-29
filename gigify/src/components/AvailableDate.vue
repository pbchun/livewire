<template>
    <section 
        class="available-dates">
        <div
            class="available-date-cards"
            v-for="event in eventData[0].events"
            v-bind:key="event.date">
            <b-card id="card-background">
                <h6 class="card-text">{{event.date}} at {{event.venue}}</h6>
                <b-button 
                  
                    vue-router="#"
                    variant="secondary"
                    @click.prevent="toggleDisplay(), passDate(event.date)"
                    showDate="event.date">Request to book this date
                </b-button>
            </b-card>
        </div>
    </section>
</template>

<script>
import RequestDateForm from "@/components/RequestDateForm";

export default {
  name: "available-date",
  props: ["toggleDisplay", "eventData", "passDate", "showDate"],
  components: {
    RequestDateForm
  }
};
</script>

<style>
.available-dates {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.available-date-cards {
  margin: auto;
  margin-top: 3vh;
  padding-bottom: 2vh;
  padding-left: 2vh;
  padding-right: 2vh;
}
#card-background {
  background: #464444;
  box-shadow: 0px 1px 2px orange;
}
</style>