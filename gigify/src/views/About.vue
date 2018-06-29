<template>
    <div class  ="profile-container">
        <Header />
        <div class="profile">
            <img src ="../assets/profilePics/reed.png">
            <h2>Reed Black</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quos nulla porro eum voluptates deleniti quia maiores distinctio laudantium placeat. Voluptate assumenda repellendus, soluta debitis fugit culpa ipsum iusto veritatis!</p>
        </div>
        <div class="profile">
            <img src="../assets/profilePics/peter.png">
            <h2>Peter Chun</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor esse repudiandae. Corrupti minima placeat dolore adipisci temporibus necessitatibus dignissimos voluptate possimus totam deserunt nam architecto, ea animi dicta explicabo.</p>
        </div>
        <div class="profile">
            <img src="../assets/profilePics/jacob.png">
            <h2>Jacob Hinkston</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis sit dolor sequi pariatur natus itaque ab. Officiis nisi dolorem omnis. Optio totam delectus, alias sequi harum dignissimos id blanditiis?</p>
        </div>
        <div class="profile">
            <img src="../assets/profilePics/mike.png">
            <h2>Mike Lavin</h2>
            <h5>Software Developer</h5>
            <p>I like my outdoor time a lot. On any day when I am nit making cool stuff on my computer you will find me on my bicycle or on my snowboard. I am a colorado native that like to figure out how things work. I enjoy coming up with cresative solutions to everyday problems</p>
        </div>
        <div class="profile">
            <img src="../assets/profilePics/jose.png">
            <h2>Jose Trujillo</h2>
            <h5>Software Developer</h5>
            <p>I like long walks on the beach and going on marathon runs. When I'm never doing those things I enjoy playing board games and music in my free time. Despite the sky high cost of living I currently live in Denver with my girlfriend, Megan, and two dogs, Bukowski and Toki.</p>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
    components: {
        Header
    }
};
</script>

<style scoped>

.profile-container{
    display:flex;
    flex-flow:wrap;
}
.profile{
    border: solid  black 1px;
    width: 20vw;
    margin: 20px
}
img{
    border-radius: 50%;
}
p {
    font-size: small;
}
</style>