import { useEffect  } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            if(scroll < 10) {
                document.getElementById("nav-bar").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 0px 0px";
                document.getElementById("nav-bar").style.backgroundColor = "rgba(236, 242, 249, 0)";
            }
            else {
                document.getElementById("nav-bar").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 0px 10px";
                document.getElementById("nav-bar").style.backgroundColor = "rgba(236, 242, 249, 1)";
            }
        });
    });

    function show_menu() {
        document.getElementById("second-wrapper").style.right = "0px";
        document.getElementById("second-wrapper").style.opacity = "1";
    };

    function hide_menu() {
        document.getElementById("second-wrapper").style.right = "-50vw";
        document.getElementById("second-wrapper").style.opacity = "0";
    };

    return (
        <>
            <nav id = "nav-bar" class="bg-blueberry-milk">
                <div class = "nav-tab-com-responsive" onClick={show_menu} > <img src = "menu_icon.jpg" style={{width:"30px"}} alt = "" /> </div>
                <div id = "second-wrapper">
                    <p onClick={hide_menu}> ✖ </p>
                    <Link class = "nav-tab font-outfit"> Home </Link>
                    <Link class = "nav-tab font-outfit"> Experience </Link>
                    <Link class = "nav-tab font-outfit"> Achievement </Link>
                    <Link class = "nav-tab font-outfit"> Certificate </Link>
                    <Link class = "nav-tab font-outfit"> Contact </Link>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;