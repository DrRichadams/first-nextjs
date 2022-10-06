import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
      <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/site/ric.png"
                alt="Picture of ric"
                width={300}
                height={300}
            />
        </div>
        <h1>Hi I'm Ric</h1>
        <p>I blog about web developement - especially frameworks like Vue and Angular Js</p>
      </section>
    )
  }