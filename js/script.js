$(document).ready(function(){

    var ImgArr = [
        ["Make a Whish", "2020.08.19","t-1-213373_640x480.jpg","This work is about the centimental & cute baby."],
        ["Purple Haze", "2020.07.29","t-3-325075_640x480.jpg"],
        ["Birds of Beauty", "2020.05.04","t-7-360109_640x480.jpg"],
        ["Masked Model", "2020.04.30","t-21-545213_640x480.jpg"],
        ["Summer Wheat", "2019.06.14","t-8-308603_640x480.jpg"],
        ["Before the Storm", "2021.03.17","t-9-340072_640x480.jpg"], 
        ["Young Woman", "2019.10.07","t-17-247234_640x480.jpg"], 
        ["Before the Storm", "2020.12.24","shutterstock_58264459-111274_640x480.jpg"], 
        ["A Loving Couple", "2021.02.21","t-13-584189_640x480.jpg"], 
        ["Spiral Staircase", "2019.10.13","shutterstock_56785618-132726_640x480.jpg"], 
        ["Lonely Ladybug", "2021.01.16","t-5-236106_640x480.jpg"], 
        ["Emphasis Lafuta", "2020.07.07","t-18-290736_640x480.jpg"], 
        ["Monk Walks", "2021.03.12","t-19-373493_640x480.jpg"], 
        ["Arena Vivian", "2020.04.05","t3-9-289799_640x480.jpg"], 
    ];

    for(i in ImgArr){
        $("#frame > section").append(`
        <article style='background-image: url(./img/${ImgArr[i][2]});'>
            <div class="dark">
                <div class="cont">
                    <div class="textP">
                        <h3>${ImgArr[i][0]}</h3>
                        <p class="date">${ImgArr[i][1]}</p>
                        <div class="line"></div>
                        <p class="sub">${ImgArr[i][3]}</p>
                    </div>
                    <div class="search">
                        <img src="./img/zoom.png" alt="">
                    </div>
                </div>    
            </div>
        </article>
        `)
    }
});