<template>
    <div id='backgroundForm'>
        <div class="request" id='request'>
            <h1>Venue Login</h1>
            <form 
            class="requestForm"
            :submitRequest="submitLogin"
            v-on:submit.prevent="submitLogin"
            >
            <input 
                v-model="login.userName"
                class="form-control mb-2 mr-sm-2"
                type="text"
                name="userName"
                placeholder="Username"
            >
            <input 
                v-model="login.password"
                class="form-control mb-2 mr-sm-2"
                type="text"
                name="password"
                placeholder="Password"
            >
            <input
                type="submit"
                id="loginButton"
                name="submit"
                value="Login"
                @click.prevent="submitLogin"
            />
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "venue-login",
  props: ["isDisplaying", "toggleDisplay"],
  data() {
    return {
      login: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    submitLogin() {
      /*AUTH POST REQ HERE*/
      this.postLogin();
      this.toggleDisplay();
    },
    postLogin() {
      var output =
        "- TEST LOGIN -" +
        "\n" +
        "Username: " +
        this.login.userName +
        "\n" +
        "Password: " +
        this.login.password;
      alert(output);
    }
  }
};
</script>

<style>
#loginButton {
  font-size: 25px;
  margin: 40px;
  border-radius: 300px;
  background-color: #f88c19;
  color: white;
  width: 50%;
}
.request {
  background-color: RGB(70, 68, 68);
  padding: 1% 2% 2% 2%;
  margin-top: 5%;
  width: 50%;
  margin-bottom: 13%;
}
#backgroundForm {
  display: flex;
  justify-content: center;
  background-color: black;
}

h1 {
  color: white;
}
@media only screen and (max-width: 600px) {
  #request {
    width: 90% !important;
  }
  #backgroundForm {
    margin-bottom: 74px;
  }
}
</style>