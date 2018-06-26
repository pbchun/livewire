<template>
    <div>
        <main>
            <VenueLogin :toggleDisplay="toggleDisplay" :isDisplaying="isDisplaying" v-show="isDisplaying" />
            <ApproveEventSection :isDisplaying="isDisplaying" v-show="!isDisplaying" />
        </main>
        <footer>
          <router-link to="/">Home</router-link>
        </footer>
        
    </div>
</template>

<script>
import VenueLogin from "@/components/VenueLogin";
import ApproveEventSection from "@/components/ApproveEventSection";

export default {
  name: "for-venues",
  components: {
    VenueLogin,
    ApproveEventSection
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
