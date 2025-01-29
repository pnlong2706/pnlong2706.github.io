import NavigationBar from "../components/nav_bar";
import Footer from "../components/footer";

function Experience() {
    return (
        <>
            <NavigationBar />
            <div style={{height:"100vh"}} class = "bg-blueberry-milk"> 
                <h1 class = "font-outfit" style={{margin: "0px", position: "relative", top: "36vh", paddingLeft: "20vw"}} > 
                    TO BE COMING SOON
                </h1>

                <div style={{position:"absolute", bottom:"0px"}}>
                    <img src = "cat_banner.png" alt = "" style={{width: "60%", position: "relative", left: "40%", margin: "0px", padding: "0px"}}/>
                    <Footer />
                </div>
            </div>
            
        </>
    );
}

export default Experience;