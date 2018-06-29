<template>
  <div class="home">
    <header class='header-home'>
      <div class="logo-section">
        <img 
          class="logo"
          src="Logo-no-background.png"
          alt="livewire">
        <div class='logo-text'>
          <h1 class="title">LIVEWIRE</h1>
          <p class="slogan">book more hear more play more</p>
        </div>
      </div>
    </header>
    <main>
      <section class='about home-section'>
        <h3>About</h3>
        <p class="about-text">
          As venue management, you know the hassles of managing your books. You have to keep the calendar full and organized. You have to keep all contact information for the acts up to date. You also have to promote your events and the venue itself. Now you
          have LIVEWIRE! Livewire helps venue management combine all of these steps into one easy to use application. Operators are able to display all upcoming shows, Add or remove acts, and even see acts interested in a booking. If you like the act you
          can simply approve it and add all provided information to the schedule. Livewire is designed to reduce days without a show therefore maximizing your profits Are you an artist? LIVEWIRE also provides a convenient way to show your interest in a gig.
          Simply select a date and provide information about the act. Livewire will take care of the rest! Fans of great acts? Check out all the venues using Livewire. Find your favorite artist at your favorite venue.
        </p>
      </section>
      <section class='high-dive home-section'>
        <router-link to="/HighDive"> <h3> > The Hi-Dive < </h3> </router-link>
        <p class='about-text'>
          Click here to visit the Hi-Dive for upcoming events!
        </p>
      </section>
      
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
.home {
  font-family: "Pathway Gothic One", sans-serif;
}
.home-section {
  margin-left: 20%;
  margin-right: 20%;
  border-bottom: 1px solid #f88c19;
  margin-bottom: 29.05px;
  margin-top: 29.05px;
}

.header-home {
  background: linear-gradient(rgb(60, 60, 60), black);
}
.about-text {
  text-align: center;
  letter-spacing: 0.05em;
  line-height: 1.5em;
  font-size: 18px;
  padding-left: 2%;
  padding-right: 2%;
}
.logo {
  height: 120px;
  width: 100px;
  align-self: center;
}

.title {
  margin-bottom: 5px;
  margin-top: 7px;
  letter-spacing: 0.23em;
}

.logo-section {
  padding: 2%;
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