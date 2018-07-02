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
          As venue management, you know the hassles of managing your books. You have to keep the calendar full and organized, keep all contact information for the acts up to date and promote your events and the venue itself. With LIVEWIRE, we've helped you manage this process. LIVEWIRE helps venue management combine all of these steps into one easy to use application. <br><br>Venues are able to display all upcoming shows to the public, manage event status, and even screen the acts interested in booking. If you like the act you
          can simply approve it and all relevant information is automatically posted to your schedule, including media! LIVEWIRE is designed to reduce days without a show, therefore maximizing your profits. <br><br>Are you an artist? LIVEWIRE provides a convenient way to show your interest in a gig.
          Simply select a date and provide information about your act. Upload embeded media of your best content to show your stuff to potential attendees. Livewire will take care of the rest. <br><br>Fan of great local acts? Check out all the venues using Livewire. Find your favorite artist at your favorite venue, or get exposed to new acts through our user-friendly interface with embedded media!
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
  .about-text {
    padding-left: 0;
    padding-right: 0;
    width: 95%;
  }
  .slogan {
    text-align: center;
  }
  .home-section {
    margin: 3px;
    width: 95%;
  }
}
</style>