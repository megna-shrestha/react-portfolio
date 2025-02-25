import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap/esm/Container"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"


export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer", "Graphic Designer"];
    const [text, setText]=useState('');
    const[delta,setDelta]= useState(300 -Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker= setInterval(() => {
            tick();
        

        },delta)
        return()=>{clearInterval(ticker)};
    },[text])

        const tick=() =>{
            let i= loopNum % toRotate.length;
            let fullText=toRotate[i];
            let updateText= isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);

            setText(updateText);

            if(isDeleting){
                setDelta(prevDelta => prevDelta/2)
            }

            if (!isDeleting && updatedText ===fullText){
                setIsDeleting(true);
                setDelta(period);
            }
            else{
                
            }
        }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">welcome to my portfolio</span>
                    <h1>{`Hi I'm megna shrestha`}<span className="wrap">Web Designer/Developer</span></h1>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.</p>
                    <button onClick={()=>console.log('connect')}>let's connect<ArrowRightCircle size={25}/></button>
                        </Col>

                        <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header image"/>
                        </Col>
                </Row>
            </Container>

        </section>
    )
}