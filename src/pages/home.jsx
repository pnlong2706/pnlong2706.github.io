import NavigationBar from "../components/nav_bar";

function Home() {

    function scroll_to_about() {
        const targetElement = document.getElementById("home-about");
        if (targetElement) {
            const topPosition = targetElement.offsetTop;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        }
    }

    function rotate_cover_img() {
        document.getElementById("img-avatar-back").style.transform = "rotateY(360deg)";
        document.getElementById("img-avatar").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_2() {
        document.getElementById("img-avatar").style.transform = "rotateY(0deg)";
        document.getElementById("img-avatar-back").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_3() {
        document.getElementById("home-about-img-back").style.transform = "rotateY(360deg)";
        document.getElementById("home-about-img-front").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_4() {
        document.getElementById("home-about-img-front").style.transform = "rotateY(0deg)";
        document.getElementById("home-about-img-back").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_5() {
        document.getElementById("home-edu-1-img-back").style.transform = "rotateY(360deg)";
        document.getElementById("home-edu-1-img-front").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_6() {
        document.getElementById("home-edu-1-img-front").style.transform = "rotateY(0deg)";
        document.getElementById("home-edu-1-img-back").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_7() {
        document.getElementById("home-edu-2-img-back").style.transform = "rotateY(360deg)";
        document.getElementById("home-edu-2-img-front").style.transform = "rotateY(180deg)";
    }

    function rotate_cover_img_8() {
        document.getElementById("home-edu-2-img-front").style.transform = "rotateY(0deg)";
        document.getElementById("home-edu-2-img-back").style.transform = "rotateY(180deg)";
    }

    function skill_tag_info(id) {
        let ele = document.getElementById(id);
        ele.firstChild.style.top = "-20px";
        ele.firstChild.style.paddingTop = "20px";
        ele.firstChild.firstChild.style.marginBottom = "5px";
    }

    function hide_skill_tag_info(id) {
        let ele = document.getElementById(id);
        ele.firstChild.style.top = "max(16vh,11vw,100px)";
        ele.firstChild.style.paddingTop = "2px";
        ele.firstChild.firstChild.style.marginBottom = "100px";
    }

    return (
        <div id = "home-page" class = "bg-blueberry-milk">
            <NavigationBar />
            <div class = "bg-blueberry-milk font-outfit" id = "home-background" > 
                <img class = "rotating" id = "home-cover-img" src="cover.png" alt=""/>
                <div id = "home-title" class = "font-outfit">
                    <img id = "img-avatar-back" src = "dragon.png" alt = "avatar" onClick={rotate_cover_img_2} /> 
                    <img id = "img-avatar" src = "cover-front.png" alt = "avatar" onClick={rotate_cover_img} /> 
                    <h1> PHAM NGOC LONG </h1>
                    <h2 class = "text-red"> 3rd year CS student </h2>
                    <p> This is my website where you can find information about me. Specifically, the website provides information about my education, achievements, experience, skills,... </p>
                    <button class = "round-button bg-blueberry-milk" onClick={scroll_to_about} > More </button>
                </div>
            </div>

            <div id = "home-about" >
            <div id = "home-about-info" >
                    <h2 class = "font-outfit"> About me </h2>
                    <p class = "font-outfit"> I am Pham Ngoc Long, and I am currently a third-year student at Ho Chi Minh University of Technology. 
                        I am a person who likes to discover new knowledge, especially in the field of programming. Always be serious about work and study, 
                        and strive to become a good programmer in the future. </p>
                </div>
                <div id = "home-about-img">
                    <img class = "home-about-img" id = "home-about-img-front" src = "card-about-front.png"  alt = "about" onClick={rotate_cover_img_3}  /> 
                    <img class = "home-about-img" id = "home-about-img-back" src = "card-about-back.png" alt = "about"  onClick={rotate_cover_img_4} />
                </div>
            </div>

            <div id = "home-edu" >
                <h1 class = "font-outfit"> Education </h1>
                <div id = "home-edu-1" class = "home-edu-container" >
                    <div id = "home-edu-1-info" class = "home-edu-info" >
                        <h2 class = "font-outfit"> Quoc Hoc Hue High School for the gifted </h2>
                        <p class = "font-outfit"> Year: 2019 - 2022 </p>
                        <p class = "font-outfit"> I was a math student at Quoc Hoc Hue High School. During high school, I participated in math competitions and won some prizes. 
                            Therefore, I have good problem solving and logical thinking skills. </p>
                    </div>
                    <div id = "home-edu-1-img" class = "home-edu-img" >
                        <img class = "home-edu-1-img" id = "home-edu-1-img-front" src = "quochoc.png"  alt = "about" onClick={rotate_cover_img_5} /> 
                        <img class = "home-edu-1-img" id = "home-edu-1-img-back" src = "card-about-back.png" alt = "about" onClick={rotate_cover_img_6} />
                    </div>
                </div>

                <div id = "home-edu-2" class = "home-edu-container">
                    <div id = "home-edu-2-info" class = "home-edu-info"  >
                        <h2 class = "font-outfit"> Ho Chi Minh University of Technology - VNUHCM </h2>
                        <p class = "font-outfit"> Year: 2022 - 2026 </p>
                        <p class = "font-outfit"> GPA: 3.9/4.0 </p>
                        <p class = "font-outfit"> I passed the entrance exam with a score of 29.15/30 and chose to major in computer science here. 
                            I'm in an honor program for my bachelor's degree. Here, I have met many talented friends, participated in some competitions, 
                            and gained experience as well as knowledge about my major. </p>
                    </div>

                    <div id = "home-edu-2-img" class = "home-edu-img">
                        <img class = "home-edu-1-img" id = "home-edu-2-img-front" src = "hcmut.png"  alt = "about" onClick={rotate_cover_img_7} /> 
                        <img class = "home-edu-1-img" id = "home-edu-2-img-back" src = "card-about-back.png" alt = "about" onClick={rotate_cover_img_8} />
                    </div>

                    
                </div>
            </div>

            <div id = "home-skill" >
                <h1 class = "font-outfit"> Skill </h1>
                <p class = "font-outfit" > Skills related to my expertise. See experience page for more. </p>
                <div id = "home-skill-list" >
                    <div id = "skill-tag-1" class = "home-skill-tag" style={{backgroundImage: `url('/skill-1.png')`, backgroundSize: `cover`}} 
                    onMouseOver={() => skill_tag_info("skill-tag-1")} onMouseLeave={() => hide_skill_tag_info("skill-tag-1")} >
                        <div class = "skill-info">
                            <h2 class = "font-outfit" > Algorithm </h2>
                            <p class = "font-outfit" > This skill helps me optimize code segments, improving program performance. </p>
                        </div>
                    </div>
                    <div id = "skill-tag-2" class = "home-skill-tag" style={{backgroundImage: `url('/skill-2.png')`, backgroundSize: `cover`}}
                    onMouseOver={() => skill_tag_info("skill-tag-2")} onMouseLeave={() => hide_skill_tag_info("skill-tag-2")} >
                        <div class = "skill-info">
                            <h2 class = "font-outfit" > Agile </h2>
                            <p class = "font-outfit" > I have some experience participating in projects applying agile model. </p>
                        </div>
                    </div>
                    <div id = "skill-tag-3" class = "home-skill-tag" style={{backgroundImage: `url('/skill-3.png')`, backgroundSize: `cover`}}
                    onMouseOver={() => skill_tag_info("skill-tag-3")} onMouseLeave={() => hide_skill_tag_info("skill-tag-3")} >
                        <div class = "skill-info">
                            <h2 class = "font-outfit" > Node.js </h2>
                            <p class = "font-outfit" > Beginner level. I took part in a school project and was responsible for backend using nodejs. </p>
                        </div>
                    </div>
                    <div id = "skill-tag-4" class = "home-skill-tag" style={{backgroundImage: `url('/skill-4.png')`, backgroundSize: `cover`}}
                    onMouseOver={() => skill_tag_info("skill-tag-4")} onMouseLeave={() => hide_skill_tag_info("skill-tag-4")} >
                        <div class = "skill-info">
                            <h2 class = "font-outfit" > React </h2>
                            <p class = "font-outfit" > Beginner level. I use React for this site and a few other personal projects.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id = "home-achv" >
                <img src = "achvm.jpg" alt = "achv"/> 
                <div id = "home-achv-info">
                    <h1 class = "font-outfit" > Achievement </h1>
                    <h2 class = "font-outfit" > International Collegiate Programming Contest (ICPC) </h2>
                    <ul class = "font-outfit text-white" >
                        <li> Gold medal in 2024 ICPC Viet Nam Southern Provincial Programming Contest. </li>
                        <li> Bronze medal in 2024 ICPC Asia Hanoi Regional Contest. </li>
                        <li> Finalist of 2025 ICPC Asia Pacific Championship.  </li>
                    </ul>

                    <h2 class = "font-outfit" > Vietnamese Olympiad in Informatics for university students </h2>
                    <ul class = "font-outfit text-white" >
                        <li> First prize in 2023 - division 2. </li>
                        <li> Third prize in 2024 - division 1. </li>
                    </ul>

                    <h2 class = "font-outfit" > Other achievements </h2>
                    <ul class = "font-outfit text-white" >
                        <li> Excellent student in the first year and second year. </li>
                        <li> "Sinh vien 5 tot" title for excellent performance in 5 aspects. </li>
                    </ul>

                    <button class = "round-button bg-blueberry-milk" > Detail </button>
                </div>
            </div>

        </div>
    )
}


export default Home;