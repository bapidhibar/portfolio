import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">I, Me and Myself</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I’m a Front-End Developer located in West Bengal, India. I have a passion for coding. Well-organised person, problem solver, with high attention to detail. Fan of Cricket, Football, WWE and outdoor activities.
              Interested in the entire frontend spectrum and working on ambitious projects with positive people. Let’s make something special.
              </p>
              
              <div className="about__button d__flex align__items__center">
                <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=https%3A%2F%2Fmail-attachment.googleusercontent.com%2Fattachment%2Fu%2F0%2F%3Fui%3D2%26ik%3Df8834cbdf1%26attid%3D0.1%26permmsgid%3Dmsg-a%3Ar-3661892450250537442%26view%3Datt%26disp%3Dinline%26realattid%3Df_l0jbedxz0%26saddbat%3DANGjdJ_KQbssAJW8ve5r2n_YfmDujAMHNNtwUs2RfjUOUb4T8B79jkSGGsnyCadMVYE_9kDsVVd1fW7wUwDhZJQeAvc3KP6aCs1ebP4-GIG7FE3ZWKLeQkKxFVpJfzL6D2RBUBhOeL7e8bcsOUaoqmtfHj4zMAhbREor7Zv3Chkg3KymtJ_2HdSbu4gAHMElsIPiLJdgxIB45CK7MQxUNqp2PGTaiLd5EA1WjgzujXScgmH-Hbi8bDQQ-oQ4c6flodpu_xS50UmFD_PZaExlmnngBjTZfvJjhwfreVFquYfhHhLzcwXrbfLiMxfJz-u0jmrTjqBnRelrVRlqYQ2I8J9V2kreggn1NGPZ6yQ5OhxnDMtmV2pRBITeOf9atwicVyZKvjzgONvYpceEYFGKStHqq8TUW7zWD0cwysh2EQnckN8biqxP3aNQUslFFZR2hv4OEu4OgqbDzfIx8Z5rR7RruTrLm2CxU_6Rs-8zhqGmTSAZmYPLo09e6b3E4_64iihOHWZTA2RFL4J5MfvEaSfkadJPwKnYqEgaEA3RHIhvZ3MDhgBBDhoIq03LT7pW7Jy1Ef1cH51fdDuQHUVWvZZQXvjmF-pjA1brgg6ZlIvzF0MeZskigoLO6BVIqylkVuQcWgtF4mBAvX_x75Xe_rvxvadsOhq91x0LvwBclQ&clen=665979" target="_blank">
                  <button className="about btn pointer">Download Resume</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;