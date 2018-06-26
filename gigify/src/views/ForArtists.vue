<template>
    <div>
        <main>
            <DateSection :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="isDisplaying" />
            <RequestDateForm :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="!isDisplaying" />
        </main>
    </div>
</template>

<script>
import DateSection from "@/components/DateSection";
import RequestDateForm from "@/components/RequestDateForm";

export default {
  name: "for-artists",
  components: {
    DateSection,
    RequestDateForm
  },
  data() {
    return {
      isDisplaying: true
    };
  },
  methods: {
    toggleDisplay() {
      this.isDisplaying = !this.isDisplaying;
    }
  }
};
</script>

<style>
</style>