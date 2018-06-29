<template>
    <div id="backgroundForm">
        <main id="addForm">
            <h2>Add an event</h2>
            <form 
                class="requestForm" 
                :submitAddedEvent="submitEvent" 
                v-on:submit.prevent="submitEvent">
               <input 
                    v-model="event.date" 
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="date"
                    placeholder="Date of event"
                />
               <input
                    v-model="event.venue"
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="date"
                    placeholder="*VENUE LOGIN*"
                    readonly
               />
               <input
                    v-model="event.artist"
                    class="form-control mb-2 mr-sm-2"
                    type="text" 
                    name="artist"
                    placeholder="Artist Name"
                />
                <input
                    v-model="event.image"
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="image"
                    placeholder="Image"
                />
                <input
                    v-model="event.musicSample"
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="image"
                    placeholder="Music Sample"
                />
                <input
                    v-model="event.description"
                    class="form-control mb-2 mr-sm-2"
                    type="text"
                    name="image"
                    placeholder="Description"
                /> 
                <input 
                    type="submit"
                    id="submitButton"
                    name="submit"
                    value="Submit"
                    class="btn btn-danger"
                />
            </form>
        </main>
    </div>
</template>

<script>
    export default {
        name: "manually-add-event",
        props: ["API"],
        data(){
            return{
                event: {
                    date: "",
                    venue: "",
                    artist: "",
                    image: "",
                    musicSample:"",
                    description: ""
                }
            }
        },
        methods:{
            submitEvent(){
                this.event.venue = "*Venue name when logged in goes here*"
                this.postEvent();
                this.event= {
                    date: "",
                    venue: "",
                    artist: "",
                    image: "",
                    musicSample:"",
                    description: ""

                };
            },
            postEvent(){
                const postOptions = {
                    method: 'POST',
                    body: JSON.stringify(this.event),
                    headers: {'Content-Type':'application/json'}
                }
                fetch(this.API.APPROVED_SHOWS, postOptions)
                    .then(res => res.json())
                    .then(resJSON => console.log(resJSON))
            }
        }
    };
</script>

<style scoped>
    #submitButton {
        font-size: 25px;
        margin: 40px;
        border-radius: 300px;
        background-color: #f88c19;
        color: white;
        width: 50%;
    }
    #addForm {
        background-color: RGB(70,68,68);
        padding: 1% 2% 2% 2%;
        margin-top: 5%;
        /* width: 75%; */
        width: 50%;
    }
    #backgroundForm {
        display: flex;
        justify-content: center;
        background-color: black;
    }

</style>
