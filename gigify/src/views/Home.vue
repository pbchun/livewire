<template>
  <div class="home">
    <header>
      <div class="logo-section">
          <img class="logo" src="Logo-no-background.png" alt="livewire">
          <div class='logo-text'>
            <h1 class="title">LIVEWIRE</h1>
            <p class="slogan">book more hear more play more</p>
          </div>
      </div>
    </header>
    <main>
        <h3>About</h3>
        <p class="about-text">As venue management, you know the hassles of managing your books. You have to keep the calendar full and organized. You have to keep all contact information for the acts up to date. You also have to promote your events and the venue itself. Now you have LIVEWIRE!

Livewire helps venue management combine all of these steps into one easy to use application. Operators are able to display all upcoming shows, Add or remove acts, and even see acts interested in a booking. If you like the act you can simply approve it and add all provided information to the schedule. Livewire is designed to reduce days without a show therefore maximizing your profits

Are you an artist? LIVEWIRE also provides a convenient way to show your interest in a gig. Simply select a date and provide information about the act. Livewire will take care of the rest! 

Fans of great acts? Check out all the venues using Livewire. Find your favorite artist at your favorite venue.</p>
       <h3>Venues</h3>
        <router-link to="/HighDive"><h3>The Hi-Dive</h3></router-link>
       
    </main>
    <footer>
      <router-link to="/ForVenues">Venue Login</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.about-text {
  text-align: left;
  letter-spacing: 0.05em;
}
.logo {
  height: 120px;
  width: 120px;
  align-self: center;
}
.title {
  margin-bottom: 5px;
  margin-top: 7px;
  letter-spacing: 0.23em;
}
.logo-section {
  margin: 2%;
  display: flex;
  flex-direction: row;
}
@media only screen and (max-width: 600px) {
  .logo-section {
    margin: 2%;
    display: flex;
    flex-direction: column;
  }
}
</style>