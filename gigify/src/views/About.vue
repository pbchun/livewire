<template>
    <div>
        <h1>MEET THE TEAM</h1>
    <div class  ="profile-container">
        <Header />
        <div class="profile">
            <img src ="../assets/profilePics/reed.png">
            <h2>Reed Black</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas reiciendis ad? Quidem quod fuga possimus cupiditate blanditiis. Iste ut consequuntur odio dolorum, ipsam molestiae aperiam id aspernatur rerum nulla.</p>
            <img src="../assets/gitIco.png" href="http://www.google.com">
            <img src="../assets/liIco.png">
        </div>
        <div class="profile">
            <img src="../assets/profilePics/peter.png">
            <h2>Peter Chun</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas reiciendis ad? Quidem quod fuga possimus cupiditate blanditiis. Iste ut consequuntur odio dolorum, ipsam molestiae aperiam id aspernatur rerum nulla.</p>
            <img src="../assets/gitIco.png">
            <img src="../assets/liIco.png">
        </div>
        <div class="profile">
            <img src="../assets/profilePics/jacob.png">
            <h2>Jacob Hinkston</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas reiciendis ad? Quidem quod fuga possimus cupiditate blanditiis. Iste ut consequuntur odio dolorum, ipsam molestiae aperiam id aspernatur rerum nulla.</p>
            <img src="../assets/gitIco.png">
            <img src="../assets/liIco.png">
        </div>
        <div class="profile">
            <img src="../assets/profilePics/mike.png">
            <h2>Mike Lavin</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas reiciendis ad? Quidem quod fuga possimus cupiditate blanditiis. Iste ut consequuntur odio dolorum, ipsam molestiae aperiam id aspernatur rerum nulla.</p>
            <img src="../assets/gitIco.png">
            <img src="../assets/liIco.png">
        </div>
        <div class="profile">
            <img src="../assets/profilePics/jose.png">
            <h2>Jose Trujillo</h2>
            <h5>Software Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas reiciendis ad? Quidem quod fuga possimus cupiditate blanditiis. Iste ut consequuntur odio dolorum, ipsam molestiae aperiam id aspernatur rerum nulla.</p>
            <img src="../assets/gitIco.png">
            <img src="../assets/liIco.png">
        </div>
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
h1{
    margin-top: 100px;
}

.profile-container{
    display:flex;
    flex-flow:wrap;
    background-color: black;
    margin-top: 100px;
}
.profile{
    border: solid  black 1px;
    width: 20vw;
    
}
img{
    border-radius: 50%;
}
p {
    font-size: small;
}
</style>