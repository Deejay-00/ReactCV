import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Darecv() {
    return (
        <div>


            <section id="main_content">
                <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                </label>
                <div className="container">
                    <div className="left-side">
                        <div className="profile-Text">

                            <div className="image">
                                <img src={require('./image/cv3.jpg')} alt={('')} />
                            </div>
                            <h2> Dare Jamiu </h2>
                            <h3> Frontend Developer</h3>
                        </div>

                        <div className="contact-info">
                            <h3 className="title">Contact Info</h3>
                            <div className="description">
                                <FontAwesomeIcon color="#ffffff" className="icon" size="lg" icon="phone" />
                                <span className="icon-text">08102738571</span>
                            </div>
                            <div className="description">
                                <FontAwesomeIcon color="#ffffff" className="icon" size="lg" icon="envelope" />
                                <a href="darejamiu.a@gmail.com"><span className="icon-text">Jammy190@gmail.com</span></a>
                            </div>
                            <div className="description">
                                <FontAwesomeIcon color="#ffffff" className="icon" size="lg" icon="house" />
                                <span className="icon-text">6, Unity St, Iju Ajuwon.</span>
                            </div>
                            <div className="description">
                                <svg className="icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                <a href="https://github.com/Deejay-00"><span className="icon-text"> github.com/Deejay-00</span></a>
                            </div>
                            <div className="description">
                                <svg className="icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                                <a href="https://www.linkedin.com/in/dare-jamiu-13bb46155/"><span className="icon-text"> linked.com/jamiu-dare</span></a>
                            </div>

                        </div>


                        <div className="contact-eduinfo" >
                            <h3 className="title">Education</h3>


                            <h5>2014 - 2019</h5>
                            <span>B.EMT <br />Environmental Management and Toxicology,</span><br />
                            <span> FUNAAB.</span>

                        </div>
                        <div className="contact-lang" >
                            <h3 className="title">Language</h3>
                            <span>English</span><br />
                            <span>Yoruba</span>
                        </div>
                    </div>


                    <div className="right-side">
                        <div className="about">
                            <h2 className="title2">Objective</h2>
                            <p> Hi, I am a front-end web developer with a passion driven desire to designing
                                 responsive and interactive websites. I also review existing codes and can consult with you on how to improve it. I’m a team player and I look forward to helping people in related field with my problem solving skills.
                            </p>
                        </div>

                        <div className="about">
                            <h2 className="title2">Experience</h2>
                            <div className="box">
                                <div className="year-company">
                                    <h5> April 2022 - Present </h5>
                                    <h5>Side-Hustle </h5>
                                </div>
                                <div className="text">
                                    <h4>Intern - Software Developer</h4>
                                    <p> I designed a CV using JSX initiative, collaborated on a project with other interns on designing a
                                        Restaurant website using React, Figma and other third party library including material ui, React router and the likes.
                                        I have also designed a personal Travel website from figma prototype using a react app.
                                </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="year-company">
                                    <h5> March - April 2022 </h5>
                                    <h5>TIIDELab </h5>
                                </div>
                                <div className="text">
                                    <h4>Intern - Software Developer</h4>
                                    <p> Worked in a team to design a tourist website with features including a payment gateway,
                                        gallery section, contact section, review, activities and so much more, I also designed a personal portfolio
                                        and learnt several soft skills including communication, critical thinking and problem solving skills.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="about skill">
                            <h2 className="title2">Skills</h2>
                            <div className="boxx">
                                <div className="box">
                                    <h4>HTML</h4>
                                    <div className="percent">
                                        {/* <div style={{ width: '100%'}}></div> */}
                                    </div>
                                </div>
                                <div className="box">
                                    <h4>CSS</h4>
                                    <div className="percent">
                                        {/* <div style={{width: '90%'}}></div> */}
                                    </div>
                                </div>
                                <div className="box">
                                    <h4>JavaScript</h4>
                                </div>
                                <div className="box">
                                    <h4>React</h4>
                                </div>
                                <div className="box">   
                                    <h4>Git</h4>
                                </div>
                                <div className="box">
                                    <h4>Photoshop</h4>
                                </div>

                            </div>
                        </div>

                        <div className="about interest">
                            <h2 className="title2">Interest</h2>
                            <ul>
                                <li><FontAwesomeIcon color="#003147" className="icon" size="lg" icon="plane-departure" />Traveling</li>
                                <li> <FontAwesomeIcon color="#003147" className="icon" size="lg" icon="car-alt" />Driving</li>
                                <li><FontAwesomeIcon color="#003147" className="icon" size="lg" icon="book" />Learning</li>
                                <li><FontAwesomeIcon color="#003147" className="icon" size="lg" icon="code" />Coding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECOND PAGE */}

            <section id="secondary_content">

                <h1> My cover Letter </h1>

                <p>Dear HR,<br />

                    This letter is to express my interest on your the job procession for an experienced, detailed-oriented, front-end web developer. <br />
                    As you'll see, I have a quality years of hands-on experience efficiently coding websites and applications using modern<br />
                    HTML, CSS, JavaScript and React. Building an articulated, easy to use, user-friendly websites and applications is truly<br />
                    a passion of mine and I am confident I would be an excellent addition to your organization. <br />
                    Thank you for your time and consideration. I look forward to speaking with you about this opportunity.
                <br />Best regards,
                <br />Dare Jamiu </p>
            </section>
        </div>

        //  JavaScript Content




    )
}

export default Darecv
