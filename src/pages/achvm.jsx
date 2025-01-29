import NavigationBar from "../components/nav_bar"
import Footer from "../components/footer"
import { useEffect  } from "react";

let slider_idx = [0,0,0];
let max_img = [3,3,3];
let slide_width = [40, 350];

function Achievement() {

    useEffect(() => {
        slider_idx = [0,0,0];
        max_img = [3,3,3];
        slide_width = [40, 350];
    });

    function change_state_slider_button(ele_id, slider_id, num) {
        let ele_right = document.getElementById(ele_id + "-right");
        if(num+1 >= max_img[slider_id]) ele_right.style.opacity = "0";
        else ele_right.style.opacity = "1";

        let ele_left = document.getElementById(ele_id + "-left");
        if(num <= 0) ele_left.style.opacity = "0";
        else ele_left.style.opacity = "1";
    }

    function slide_img_right(ele_id, slider_id) {
        let num = slider_idx[slider_id];
        console.log(ele_id, slider_id, num);
        if(num+1 >= max_img[slider_id]) return;
        document.getElementById(ele_id).style.left = "min(-" + (num + 1) * slide_width[0]  + "vw, -" + (num + 1) * slide_width[1] + "px)";
        slider_idx[slider_id] += 1;
        change_state_slider_button(ele_id,  slider_id, slider_idx[slider_id]);
    }

    function slide_img_left(ele_id, slider_id) {
        let num = slider_idx[slider_id]; 
        console.log(ele_id, slider_id, num);
        if(num <= 0) return;
        document.getElementById(ele_id).style.left = "min(-" + (num - 1) * slide_width[0] + "vw, -" + (num - 1) * slide_width[1] + "px)";
        slider_idx[slider_id] -= 1;
        change_state_slider_button(ele_id,  slider_id, slider_idx[slider_id]);
    }

    return (
        <>
        <NavigationBar />
        <div id = "achvm" class = "bg-blueberry-milk">
            <h1 class = "font-outfit" style={{textAlign:"center", marginBottom: "5vw"}} > ACHIEVEMENT </h1>
            
            <div id = "achvm-icpc" class = "achvm-container" > 
                <div id = "achvm-icpc-info" class = "achvm-info">
                    <h2 class = "font-outfit"> International Collegiate Programming Contest (ICPC) </h2>
                    <p class = "font-outfit" > ICPC is an annual multi-tiered
                        competitive programming competition among the universities of the world. ICPC contests are team competitions. 
                        Current rules stipulate that each team consist of three students. I am honored to participate and achieve 
                        some results in this competition: </p>

                    <p class = "font-outfit" style={{fontWeight:"600"}} > Gold medal in 2024 ICPC Viet Nam Southern Provincial Programming Contest. </p>
                    <p class = "font-outfit" style={{fontWeight:"600"}} > Bronze medal in 2024 ICPC Asia Hanoi Regional Contest. </p>
                </div>

                <div id = "achvm-icpc-img" class = "img-slider">
                    <div id = "img-slider-1" class = "list-img-slide">
                        <img src = "icpc-br.png" alt = "icpc"/>
                        <img src = "icpc-gold.jpg" alt = "icpc"/>
                        <img src = "icpc-bronze.jpg" alt = "icpc"/> 
                    </div>

                    <button id = "img-slider-1-left" class = "slide-left" onClick={()=>{slide_img_left("img-slider-1", 0)}} >  <p> &lt; </p> </button>
                    <button id = "img-slider-1-right" class = "slide-right" onClick={()=>{slide_img_right("img-slider-1", 0)}} > <p> &gt; </p> </button>
                </div>
            </div>

            <div id = "olp-icpc" class = "achvm-container" > 
                <div id = "olp-icpc-info" class = "achvm-info">
                    <h2 class = "font-outfit"> Vietnamese Olympiad in Informatics for university students </h2>
                    <p class = "font-outfit" > This is an individual programming competition for university students. The competition is divided into 3 divisions 1, 2, 3. 
                        Div 3 is for non-ITs, div 2 is for IT candidates who have not won any prizes, 
                        and div 1 has no requirements for candidates, which is also the most difficult division. 
                        I have won prizes in the following years of participation: </p>

                    <p class = "font-outfit" style={{fontWeight:"600"}} > First prize in 2023 - division 2. </p>
                    <p class = "font-outfit" style={{fontWeight:"600"}} > Third prize in 2024 - division 1. </p>
                </div>

                <div id = "olp-icpc-img" class = "img-slider">
                    <div id = "img-slider-2" class = "list-img-slide">
                        <img src = "olp2023_0.jpg" alt = "olp"/>
                        <img src = "olp2023.jpg" alt = "olp"/>
                        <img src = "olp2024.jpg" alt = "olp"/>
                    </div>

                    <button id = "img-slider-2-left" class = "slide-left" onClick={()=>{slide_img_left("img-slider-2", 1)}} >  <p> &lt; </p> </button>
                    <button id = "img-slider-2-right" class = "slide-right" onClick={()=>{slide_img_right("img-slider-2", 1)}} > <p> &gt; </p> </button>
                </div>
            </div>

            <div id = "oth-icpc" class = "achvm-container" > 
                <div id = "oth-icpc-info" class = "achvm-info">
                    <h2 class = "font-outfit"> Other achievements </h2>
                    <p class = "font-outfit" > These are achievements that I got when I was a university student. </p>

                    <p class = "font-outfit" style={{fontWeight:"600"}} > Excellent student in the first year and second year. </p>
                    <p class = "font-outfit" style={{fontWeight:"600"}} > "Sinh vien 5 tot" title for excellent performance in 5 aspects. </p>
                </div>

                <div id = "oth-icpc-img" class = "img-slider">
                    <div id = "img-slider-3" class = "list-img-slide">
                        <img src = "sv5t1.jpg" alt = "other"/>
                        <img src = "sv5t1.png" alt = "other"/>
                        <img src = "svsx2.jpg" alt = "other"/> 
                    </div>

                    <button id = "img-slider-3-left" class = "slide-left" onClick={()=>{slide_img_left("img-slider-3", 2)}} >  <p> &lt; </p> </button>
                    <button id = "img-slider-3-right" class = "slide-right" onClick={()=>{slide_img_right("img-slider-3", 2)}} > <p> &gt; </p> </button>
                </div>
            </div>


        </div>
        <Footer />
        </>
    )
}

export default Achievement;