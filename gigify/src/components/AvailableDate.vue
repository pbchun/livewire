<template>
    <section class="available-dates">
        <div class="available-date-cards">
            <b-card title="7/04/18">
                <p class="card-text">Date Details</p>
                <b-button vue-router="#" variant="primary">Request to book this date</b-button>
            </b-card>
        </div>
        <div class="available-date-cards">
            <b-card title="7/10/18">
                <p class="card-text">Date Details</p>
                <b-button vue-router="#" variant="primary">Request to book this date</b-button>
            </b-card>
        </div>
        <div class="available-date-cards">
            <b-card title="7/20/18">
                <p class="card-text">Date Details</p>
                <b-button vue-router="#" variant="primary">Request to book this date</b-button>
            </b-card>
        </div>
    </section>
</template>

<script>
export default {
  name: "available-date",
  props: ["toggleDisplay"]
};
</script>

<style>
    .available-dates {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .available-date-cards {
        border: 1px solid darkgray;
        margin: auto;
        margin-top: 3vh;
        padding-bottom: 2vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }
</style>