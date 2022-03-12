
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";
import image33 from '../../images/image33.webp'
import image34 from '../../images/image34.webp'
import image35 from '../../images/image35.webp'
import image36 from '../../images/image36.webp'
import image37 from '../../images/image37.webp'
import image38 from '../../images/image38.webp'
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';

export default function Academics(){

    const data = [
        {
            image: `${image33}`,
            alt: "Academics",
            title: "A-Levels Tutoring",
            body: "Why confine learning to in-person classes that require upfront rental costs for classroom space? With online courses, Tailored Tutors helps students ace your A-level exams from anywhere; and you can do the same.",
            profile:`${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image34}`,
            alt: "Academics",
            title: "Languages",
            body: "Mark is a high school language teacher turned language podcaster. In his search to provide the best medium for others to learn languages, Mark expanded his podcasts into online courses.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        },
        {
            image: `${image35}`,
            alt: "Academics",
            title: "3D Design",
            body: "Zacharias is a 3D designer who started a freelance career, he shifted his focus into helping others interested in 3D design achieve new levels of learning online.",
            profile: `${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image36}`,
            alt: "Academics",
            title: "Self-Published Authors",
            body: "Mark turned his own experience as a successful self-published author into a course for authors on self publishing and advertising.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        },
        {
            image: `${image37}`,
            alt: "Academics",
            title: "E-learning Courses",
            body: "With 3.6M+ subscribers, Henry Reich created an online course that distills how the world works into 60 bite-size lessons.",
            profile:`${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image38}`,
            alt: "Academics",
            title: "Music Production",
            body: "Every week, IO Music Academy hosts livestream courses with some of the world's best music producers. Students can interact and ask questions live or watch recordings at their own pace.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Academics</h1>
            <p>Turn one-on-one tutoring and coaching into guided online courses students can <br /> take from the comfort of their living rooms.</p>
            </div>
            <div className={style.cardbox}>
                {
                data.map((item)=> {
                return <Link className={style.link}>
                         <Card 
                            image={item.image}
                            alt={item.alt}
                            title={item.title}
                            body = {item.body}
                            profile={item.profile}
                            author={item.author}
                        />
                </Link>
            })}
            </div>
        </div>
    )
}