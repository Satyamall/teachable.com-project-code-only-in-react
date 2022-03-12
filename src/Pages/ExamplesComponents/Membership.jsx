
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";
import image39 from '../../images/image39.webp'
import image40 from '../../images/image40.webp'
import image41 from '../../images/image41.webp'
import image42 from '../../images/image42.webp'
import image43 from '../../images/image43.webp'
import image44 from '../../images/image44.webp'
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';

export default function Membership(){

    const data = [
        {
            image: `${image39}`,
            alt: "Membership",
            title: "Harmonica School",
            body: "Tomlin ran an in-person and online harmonica school. When he found himself strapped for time, he decided to focus on his reaching more students with online memberships",
            profile:`${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image40}`,
            alt: "Membership",
            title: "Trading Skills",
            body: "Sean Jantz created a stock market education community and subscription course to help those interested in learning about trading.",
            profile:`${profile2}`,
            author: "Jaswant Chaudhary"
        },
        {
            image: `${image41}`,
            alt: "Membership",
            title: "Jewelry",
            body: "Jessica started the London Jewellery School over 10 years ago, and has brought her knowledge online with Jewellers Academy.",
            profile: `${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image:`${image42}`,
            alt: "Membership",
            title: "Coding Classes",
            body: "Learning to master the JavaScript ecosystem won’t happen overnight. Subscribe to Tyler’s membership for as long as you’re learning.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        },
        {
            image: `${image43}`,
            alt: "Membership",
            title: "Photoshop Training",
            body: "Dave has been teaching Photoshop and related programs for more than 25 years. He has created hundreds of courses which you can subscribe to.",
            profile: `${profile1}`,
            author: "Satya Prakash Mall"
        },
        {
            image: `${image44}`,
            alt: "Membership",
            title: "Marketing",
            body: "Learn proven sales and marketing strategies at your own pace with mentorship by coach Edward Zia.",
            profile: `${profile2}`,
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Memberships</h1>
            <p>Create your own membership course on Teachable. Whether it’s a hobby or a <br /> professional training, some topics are better suited as a subscription-based <br /> membership.</p>
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