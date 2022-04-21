import React from 'react'
import './style.css'

function Darecv() {
    return (
        <section>
            <div className="container">
                <div className="left-side">
                    <div className="profile-Text">

                        <div className="image">  
                        <img src={require('./image/cv1.jpeg')} alt={('')}  />
                        </div>
                        <h2> Dare Jamiu </h2>
                        <h3> Frontend Developer</h3>
                    </div>

                    <div className="contact-info">
                    <h3 className="title">Contact Info</h3>
                    <div className="description">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <span className="icon-text"> 08102738571</span>
                    </div>
                    <div className="description">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <a href="darejamiu.a@gmail.com"><span className="icon-text"> darejamiu.a@gmail.com</span></a>
                    </div>
                    <div className="description">
                    <svg className="icon-text" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                     <a href="https://github.com/Deejay-00"><span className="icon-text"> github.com/Deejay-00</span></a>
                    </div>
                    <div className="description">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    <a href="https://www.linkedin.com/in/dare-jamiu-13bb46155/"><span className="icon-text"> linked.com/jamiu-dare</span></a>
                    </div>
                    <div className="description">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <span className="icon-text"> 6, Unity St, Iju Ajuwon.</span>
                    </div>
                    </div>  


                    <div className="contact-eduinfo" >
                        <h3 className="title">Education</h3>

                        
                                <h5>2014 - 2019</h5>
                                <span>B.EMT Environmental Management</span>
                                <span> FUNAAB</span>
                     
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
                                    Restaurant website using React and other third party library including material ui, React router and the likes.
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
                                <p> Worked together with a team to design a tourist website also designed a personal portfolio.
                                    I also learned several soft skills including communication and problem solving skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about skill">
                        <h2 className="title2">Skills</h2>
                        <div className="box">
                            <h4>HTML</h4>
                            <div className="percent">
                                <div style={{ width: '100%'}}></div>
                            </div>
                        </div>
                        <div className="box">
                            <h4>CSS</h4>
                            <div className="percent">
                            <div style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div className="box">
                            <h4>JavaScript</h4>
                            <div className="percent">
                            <div style={{width: '20%'}}></div>
                            </div>
                        </div>
                        <div className="box">
                            <h4>React</h4>
                            <div className="percent">
                            <div style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <div className="box">
                            <h4>Photoshop</h4>
                            <div className="percent">
                            <div style={{width: '65%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="about interest">
                        <h2 className="title2">Interest</h2>
                        <ul>
                            <li>Traveling</li>
                            <li>Driving</li>
                            <li>Learning</li>
                            <li>Coding</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Darecv
