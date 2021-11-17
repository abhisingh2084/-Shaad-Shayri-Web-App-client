import { BsFacebook, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div style = {{marginTop : "50px",position : "relative", bottom : "0",left : "0",display : "flex", justifyContent : "center", alignItems : "center", background : "white", width : "100%", borderRadius : "20px"}}>
            <h4>2021-22 All Right Reserved || ♡ Abhishek Kumar </h4>
            <a href="https://www.facebook.com/abhishek.yaduvanshi.39794895" style = {{color : "black", fontSize : "20px", marginLeft : "20px"}} target = "_blank"><BsFacebook/></a>
            <a href="https://www.youtube.com/channel/UC3tbKLux0wbOUDwbOXotN3A" style = {{color : "black", fontSize : "20px", marginLeft : "10px"}} target = "_blank"><BsYoutube/></a>
            <a href="https://github.com/abhisingh2084" style = {{color : "black", fontSize : "20px", marginLeft : "10px"}} target = "_blank"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-0b2b87192/" style = {{color : "black", fontSize : "20px", marginLeft : "10px"}} target = "_blank"><BsLinkedin/></a>
        </div>
    )
}

export default Footer
