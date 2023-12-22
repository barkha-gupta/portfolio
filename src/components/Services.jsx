import React from 'react'

export default function Services() {
  return (
    <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Web Applications</h3>
                    <p>I specialize in building scalable and responsive web applications, prioritizing user experiences. Proficient in HTML, CSS, and JavaScript frameworks. Leveraging modern web development practices, I create performant applications with dynamic components. Clean code and adherence to best practices ensure maintainability and extensibility. Passionate about delivering optimal cross-device compatibility, I strive to exceed user expectations in every project. </p>
                </div> 
                
                <div className="service">
                    <h3>Implement Back-end Solutions</h3>
                    <p>I specialize in back-end development using Node.js and Express.js to create scalable architectures and seamless API integrations. With expertise in databases like MongoDB and Firebase, I ensure efficient data management. I prioritize clean, maintainable code for future enhancements and deliver secure interactions between front-end and back-end, optimizing user experiences.</p>
                </div> 
                
                <div className="service">
                    <h3>Full-cycle Project Development</h3>
                    <p>With expertise in full-cycle project development, I can manage the entire process from requirements gathering to deployment and maintenance. Collaborating closely with clients or product teams. Proficient in Git and GitHub, I maintain a structured development workflow for seamless collaboration and code management. My focus is on delivering high-quality, production-ready code within specified timelines.</p>
                </div> 
            </div> 
            
            <a href="#work" className="btn">My Work</a>
        </section>
  )
}

