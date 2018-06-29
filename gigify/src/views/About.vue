<template>
    <div>
        <Header />
        <div>
            <h1>MEET THE TEAM</h1>
            <div class  ="profile-container">
                <div class="profile">
                    <div>
                        <img src ="../assets/profilePics/reed.png">
                        <h4>Reed Black</h4>
                        <h6>Software Developer</h6>
                        <p>A Chicago street hardened thug, Reed moved to Colorado to get closer to both nature and technology. His favorite Karaoke song is "Thunderstruck", and his fetish is modals.</p>
                    </div><div>
                        <a href="https://github.com/ReedBlack"><img src="../assets/gitIco.png"></a>
                        <a href="https://www.linkedin.com/in/reed-black/"><img src="../assets/liIco.png"></a>
                    </div>
                </div>
            <div class="profile">
                <div>
                    <img src="../assets/profilePics/peter.png">
                    <h4>Peter Chun</h4>
                    <h6>Software Developer</h6>
                    <p>Nashville native, Denver transplant. When I am not spending my time coding, I enjoy traveling, attending live music and comedy shows, and spending time with my girlfriend, dog, and two cats.</p>
                </div>
                <div>
                    <a href="https://github.com/pbchun"><img src="../assets/gitIco.png"></a>
                    <a href="https://www.linkedin.com/in/pbchun/"><img src="../assets/liIco.png"></a>
                </div>
            </div>
            <div class="profile">
                <div>
                    <img src="../assets/profilePics/jacob.png">
                    <h4>Jacob Hinkston</h4>
                    <h6>Software Developer</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cupiditate laborum tempora magnam vel, odio vitae fugiat tempore dolores repudiandae sint voluptatum laboriosam. Totam, ipsa esse! Aut quas impedit voluptatum.</p>
                </div>
                <div>
                    <a href="https://github.com/jacobhinkston"><img src="../assets/gitIco.png"></a>
                    <a href="https://www.linkedin.com/in/jacobhinkston/"><img src="../assets/liIco.png"></a>
                </div>
            </div>
            <div class="profile">
                <div>
                    <img src="../assets/profilePics/mike.png">
                    <h4>Mike Lavin</h4>
                    <h6>Software Developer</h6>
                    <p>A colorado native who loves the outdoors. When not making progressive apps you can find me on my bike or snowboard. I have a love of travel and experiancing new cultures.</p>
                </div>
                <div>
                    <a href="http://www.github.com/mike82co"><img src="../assets/gitIco.png"></a>
                    <a href="https://www.linkedin.com/in/mike82co"><img src="../assets/liIco.png"></a>
                </div>
            </div>
            <div class="profile">
                <div>
                    <img src="../assets/profilePics/jose.png">
                    <h4>Jose Trujillo</h4>
                    <h6>Software Developer</h6>
                    <p>I like long walks on the beach and going on marathon runs. When I'm never doing those things I enjoy playing board games and music in my free time. Despite the sky high cost of living I currently live in Denver with my girlfriend, Megan, and two dogs, Bukowski and Toki.</p>
                </div>
                <div>
                    <a href="http://www.github.com/trujilloj"><img src="../assets/gitIco.png"></a>
                    <a href="https://www.linkedin.com/in/trujilloj/"><img src="../assets/liIco.png"></a>
                </div>
            </div>
        </div>
    </div>
    <VenueFooter />
    </div>
</template>

<script>
import Header from "@/components/Header";
import VenueFooter from "@/components/VenueFooter"

export default {
    components: {
        Header,
        VenueFooter
    }
};
</script>

<style scoped>


.profile-container{
    display:flex;
    flex-flow:wrap;
    background-color: black;
    margin-top: 75px;
    justify-content: space-around;
}
.profile{
    border: solid  black 1px;
    width: 18vw;
    display: flex;
    flex-direction: column; 
    justify-content: space-between
    
}
img{
    border-radius: 50%;
}
p {
    font-size: small;
}
a {
    margin: 3%;
}
</style>