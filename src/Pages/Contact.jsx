
import style from "./Contact.module.css";
import profile from '../images/profile.png'
import profile2 from '../images/profile2.png'
import profile3 from '../images/profile3.png'


export default function Contact() {

    return (
        <div className={style.contact}>
            <h1>Contact Us from below given Descriptions to any One</h1>
            <div className={style.box}>
                <div className={style.box1}>
                    <img src={profile} alt="Satya" />
                </div>
                <div className={style.box2}>
                    <h3>Name: Satya Prakash Mall</h3>
                    <p>Description: Creator of this Website</p>
                    <h3>About: I am a Full Stack Web Developer</h3>
                    <p>Qualification: B.Tech in Computer Science and Engineering</p>
                    <div className={style.btn}>
                       <a href="mailto:thesatyamall123@gmail.com"> Contact us with email </a>
                    </div>
                    <div className={style.btn}>
                       <a href="//api.whatsapp.com/send?phone=918953802687">Contact us on What's Up</a>
                    </div>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.box1}>
                    <img src={profile2} alt="Jaswant" />
                </div>
                <div className={style.box2}>
                    <h3>Name: Jaswant Chaudhary</h3>
                    <p>Description: Creator of this Website</p>
                    <h3>About: I am a Full Stack Web Developer</h3>
                    <p>Qualification: B.Tech in Computer Science and Engineering</p>
                    <div className={style.btn}>
                    <a href="mailto:recjaswantcse@gmail.com"> Contact us with email </a>
                    </div>
                    <div className={style.btn}>
                    <a href="//api.whatsapp.com/send?phone=919648976787">Contact us on What's Up</a>
                    </div>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.box1}>
                    <img src={profile3} alt="Paarug" />
                </div>
                <div className={style.box2}>
                    <h3>Name: Paarug Sethi</h3>
                    <p>Description: Creator of this Website</p>
                    <h3>About: I am a Full Stack Web Developer</h3>
                    <p>Qualification: BMS</p>
                    <div className={style.btn}>
                    <a href="mailto:paarug_pw1_119@masai.school"> Contact us with email </a>
                    </div>
                    <div className={style.btn}>
                    <a href="//api.whatsapp.com/send?phone=918860727728">Contact us on What's Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}