import profilePic from "../assets/sarah.jpg";

export default function AboutPage() {
    return (
        <>
            <div className="aboutme-box">
                <h2>About Me</h2>
                <img src={profilePic} alt="Profile picture of Sarah"></img>
                <p>Hello, my name is Sarah, and welcome to my portfolio application! This is a special portfolio created using React to house the projects I've completed while attending the coding boot camp through the University of Kansas - which is focused on full stack web development. I'm a 32-year old web developer hailing from Wichita, KS.
                <br />
                <br />
                I have some previous experience from about 10 years ago when I attended Butler County Community College in their AAS degree program for web development, but had to withdraw and hadn't been able to get back into this field until I started the KU boot camp. With this boot camp though, despite being a lot shorter of a time, I have learned about way more varieties of web development technologies than I originally did in my degree program.
                <br />
                <br />
                I've learned and have become proficient in the more "basic" technologies like HTML, CSS, and Javascript to more advanced frameworks such as Mern, MySQL, and React - which is what is being used to create this site you're on now! Technology is amazing!
                <br />
                <br />
                On my off time, I enjoy reading and writing, watching YouTube, listening to music (to which I'm an avid <a href="https://www.youtube.com/watch?v=6q0JnftlH-I&list=PL_Cqw69_m_yz4JcOfmZb2IDWwIuej1xfN">BTS</a> fan 😉), and spending time with my cat, Wednesday - yes, she's a black cat.
                <br />
                <br />
                Please feel free to check out some of the projects and assignments I've worked on for the boot camp, and follow along as I create even more!
                </p>
            </div>
        </>
    );
}