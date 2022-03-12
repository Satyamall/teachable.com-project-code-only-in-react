
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";
import image45 from '../../images/image45.webp'
import image46 from '../../images/image46.webp'
import image47 from '../../images/image47.webp'
import image48 from '../../images/image48.webp'
import image49 from '../../images/image49.webp'
import image50 from '../../images/image50.webp'
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';

export default function Business(){

    const data = [
        {
            image: `${image45}`,
            alt: "Business",
            title: "StackSkills",
            body: "Backed by 500Startups and Tim Draper, StackSkills distributes over 475 courses to over 100,000 students.",
            profile: `${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image46}`,
            alt: "Business",
            title: "The New York Times",
            body: "The New York Times offers courses to both pre-college and professional audiences to teach them what the Times knows best: telling brand stories through video.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        },
        {
            image: `${image47}`,
            alt: "Business",
            title: "GSN3 Academy",
            body: "Software for networking professionals with 2M+ downloads. By creating online courses, GSN3 expanded its revenue streams.",
            profile: `${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image48}`,
            alt: "Business",
            title: "GetResponse",
            body: "Email marketing company GetResponse use Teachable to power their branded certification program worldwide.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        },
        {
            image: `${image49}`,
            alt: "Business",
            title: "Product Marketing Alliance",
            body: "To elevate the role of product marketing, PMA was created to offer people in the industry a community and educate others on how to transition in.",
            profile: `${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image50}`,
            alt: "Business",
            title: "Cover Insurance",
            body: "Cover insurance company offers a free defensive driving course to educate users and to offer discount incentives for their product.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Teachable for business</h1>
            <p>Use Teachable within your organization to provide value to your customers, train <br /> employees, or sell courses to the general public.</p>
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