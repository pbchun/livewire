<template>
    <div>
        <h1>section for adding available dates</h1>
    </div>
</template>

<script>
export default {
  props: ["API", "availableDates"],
  methods: {
    postAvailableDate() {
      return fetch(this.API.DATE_LISTINGS, {
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
</style>