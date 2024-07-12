

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './port.css'; 

const Portfolio = () => {
    useEffect(() => {
        var typed = new Typed(".changing", {
            strings: ["Coder", "Software Developer", "FrontEnd Developer"],
            typeSpeed: 140,
            backSpeed: 140,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section id="border">
                <section className="first">
                    <div className="navbar">
                        <h1>Portfolio</h1>
                        <ul>
                            <li><a href="#h">Home</a></li>
                            <li><a href="#a">About</a></li>
                            <li><a href="#q">Education Details</a></li>
                            <li><a href="#s">Skills</a></li>
                            <i id="new" className="fas fa-bars"></i>
                        </ul>
                    </div>
                    <section className="home" id="h">
                        <div className="content">
                            <h2>Hello, It's Me</h2>
                            <h1>RAJENDRA REDDY SALIPELA</h1>
                            <h2>And I am a <span className="changing">FrontEnd Developer</span></h2>
                            <p>I am a computer science student with a deep passion for technology and problem-solving. My journey began with a
                                fascination for computers and programming languages like Java, C++, HTML, CSS, JavaScript, and MySQL.</p>
 
                        </div>
                        <div className="image" id="newdiv">
                            <img id="newimg" src="my photo.jpg" alt="my photo" />
                        </div>
                    </section>
                </section>
                <section className="second" id="a">
                    <div className="image2">
                        <img src="raju.jpg" alt="raju" />
                    </div>
                    <div className="content2">
                        <h1 id="A">About me</h1>
                        <p>I am a dedicated and passionate web developer with a strong background in HTML, CSS, and JavaScript.
                            With a keen eye for design and commitment to creating engaging and user-friendly websites.
                        </p>
                        <p>Experienced in front-end frameworks like React, I also possess efficient knowledge in back-end development using Node.js and Express.
                        </p>
                        <p>I am motivated to continuously learn and stay up-to-date with the latest industry trends and technologies.</p>
                    </div>
                </section>
                <section className="Qua" id="q">
                    <h1>Education Details</h1>
                    <div className="qualification">
                        <div>
                            <h1 className="heading">School</h1>
                            <h2 className="clgname">Sarvagna E.M High school</h2>
                            <h4>Nandyal</h4>
                            <h4>Nandyal</h4>
                        </div>
                        <div>
                            <h1 className="heading">Intermediate</h1>
                            <h2 className="clgname">Narayana junior College</h2>
                            <h4>MPC</h4>
                            <h4>Kurnool</h4>
                        </div>
                        <div>
                            <h1 className="heading">B.Tech</h1>
                            <h2 id="clg" className="clgname">Annamacharya Institute of Technology and Sciences</h2>
                            <h4>Computer Science & Engineering</h4>
                            <h4>Rajampeta</h4>
                        </div>
                    </div>
                </section>
                <section className="forth C" id="s">
                    <h1 id="head">Skills</h1>
                    <section className="scroll-container ">
                        <section className="third">
                            <div><img src="https://tse4.mm.bing.net/th?id=OIP.WeX8Uvgs4gxgeVRGvJR7aQHaDt&pid=Api&P=0&h=180.jpg" alt="" /></div>
                            <div><img src="https://tse2.mm.bing.net/th?id=OIP.Cqt6j3TVGiYzPIwcrii1_gHaDt&pid=Api&P=0&h=180.jpg" alt="" /></div>
                            <div><img src="https://tse4.mm.bing.net/th?id=OIP.Z7oz-UE96cn06LU5Uid04gHaEK&pid=Api&P=0&h=180.jpg" alt="" /></div>
                            <div><img src="https://tse1.mm.bing.net/th?id=OIP.YePVzjkjsadOqzQ03wl5kAHaEO&pid=Api&P=0&h=180.jpg" alt="" /></div>
                            <div><img src="https://tse4.mm.bing.net/th?id=OIP.S_9pgiKacbi3FxPKxDmusgHaFy&pid=Api&P=0&h=180.jpg" alt="" /></div>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default Portfolio;
