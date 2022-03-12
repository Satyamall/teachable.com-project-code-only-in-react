
import { Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";
import image21 from '../../images/image21.webp';
import image22 from '../../images/image22.webp';
import image23 from '../../images/image23.webp';
import image24 from '../../images/image24.webp';
import image25 from '../../images/image25.webp';
import image26 from '../../images/image26.webp';
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';

export default function Health() {

  const data = [
    {
      image: `${image21}`,
      alt: "Health",
      title: "Fitness Bootcamp",
      body: "Greg started out as a personal trainer, but knew he didn’t want to stop there. With his experience as a trainer and researcher, he launched a fitness course online.",
      profile:  `${profile1}`,
      author: "Satya Prakash Mall"
    },
    {
      image: `${image22}`,
      alt: "Health",
      title: "Yoga",
      body: "Rachel teaches online courses on the transformative power of yoga for backcare and scoliosis.",
      profile:  `${profile2}`,
      author: "Jaswant Chaudhary"
    },
    {
      image: `${image23}`,
      alt: "Health",
      title: "Nutrition",
      body: "Susan is a dietitian and an owner of a thriving coaching business. After many years of experience, she has transformed most frequently asked questions into online courses.",
      profile:  `${profile1}`,
      author: "Satya Prakash Mall"
    },
    {
      image: `${image24}`,
      alt: "Health",
      title: "Triathlon Training",
      body: "Balanced Art Multisport provides in-person coaching and an online training program so you can stay on track even when you’re traveling.",
      profile:  `${profile2}`,
      author: "Jaswant Chaudhary"
    },
    {
      image: `${image25}`,
      alt: "Health",
      title: "Breastfeeding",
      body: "Stacey started a lactation cookie business but realized she kept being asked about breastfeeding. So, she pivoted her business into a course.",
      profile:  `${profile1}`,
      author: "Satya Prakash Mall"
    },
    {
      image: `${image26}`,
      alt: "Health",
      title: "Healthy Cooking",
      body: "Traditional chefs and nutritionist teach healthy cooking, ancient culinary wisdom, and how to eat healthy every day with joy",
      profile: `${profile2}`,
      author: "Jaswant Chaudhary"
    }
  ]

  return (
    <div className={style.box}>
      <div className={style.text}>
        <h1>Health</h1>
        <p>Bring your in-person studio or health practice online so your clients can work out, <br /> get nutrition advice, and more anytime, anywhere. Plus, reach new audiences <br /> around the world.</p>
      </div>
      <div className={style.cardbox}>
        {
          data.map((item) => {
            return <Link className={style.link}>
              <Card
                image={item.image}
                alt={item.alt}
                title={item.title}
                body={item.body}
                profile={item.profile}
                author={item.author}
              />
            </Link>
          })}
      </div>
    </div>
  )
}