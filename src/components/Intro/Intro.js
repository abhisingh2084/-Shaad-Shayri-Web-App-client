import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import welcome from "../../images/welcome.json"

const Intro = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: welcome,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    };
    
    return (
        <div className = "intro-bg" style = {{width : "100%", borderRadius : "20px", display:"flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
             <Lottie options={defaultOptions} height= {200} width = {600}/>
             <h1 style = {{fontSize : "50px", fontWeight : "900",position : "relative", top : "-60px", left  : "-90px" }}>✍️To इरShaad  </h1>
            <Link to = "/home" style = {{textDecoration : "none"}}>
                <button className = "btn-grad" >Get Inside!</button>
            </Link>
             <h3 style = {{fontWeight : "400"}}>Designed And Developed By Abhishek Kumar.</h3>
        </div>
    )
}

export default Intro
