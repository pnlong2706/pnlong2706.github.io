import NavigationBar from "../components/nav_bar";
import Footer from "../components/footer";

function Contact() {

    function flip(idF, idB) {
        document.getElementById(idB).style.transform = "rotateY(360deg)";
        document.getElementById(idF).style.transform = "rotateY(180deg)";
    }

    function re_flip(idF, idB) {
        document.getElementById(idF).style.transform = "rotateY(0deg)";
        document.getElementById(idB).style.transform = "rotateY(180deg)";
    }

    return (
        <div class = "bg-blueberry-milk" >
            <NavigationBar />
            <div id = "home-contact" style={{paddingBottom:"max(10vh,10vw)",paddingTop:"15vh"}}>
                <div id = "home-contact-info" >
                    <h2 class = "font-outfit"> Contact </h2>
                    <p class = "font-outfit"> Address: 01 Ta Quang Buu, Linh Trung, Thu Duc, Ho Chi Minh City, Viet Nam </p>
                    <p class = "font-outfit"> Email: pnlong27@gmail.com </p>
                    <p class = "font-outfit"> Phone: +84 963 81 2245 </p>
                    <p class = "font-outfit"> Facebook: <a href="https://www.facebook.com/Ngoclong270604" target="_blank" rel="noreferrer"  > Pham Ngoc Long ⇲ </a> </p>
                    <p class = "font-outfit"> Linked: <a href="https://www.linkedin.com/in/long-pham-ngoc-684834174/" target="_blank" rel="noreferrer"  > Pham Ngoc Long ⇲ </a> </p>
                </div>
                <div id = "home-contact-img">
                    <img class = "home-contact-img" id = "home-contact-img-front" src = "cat.png"  alt = "about" 
                    onClick={() => flip("home-contact-img-front", "home-contact-img-back")} /> 
                    <img class = "home-contact-img" id = "home-contact-img-back" src = "card-about-back.png" alt = "about"  
                    onClick={() => re_flip("home-contact-img-front", "home-contact-img-back")}  />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;