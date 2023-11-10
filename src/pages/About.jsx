import profilePic from "../assets/sarah.jpg";

export default function AboutPage() {
    return (
        <>
            <div className="aboutme-box">
                <h2>About Me</h2>
                <img src={profilePic} alt="Profile picture of Sarah"></img>
                <p>Hello, my name is Sarah, and welcome to my portfolio application! This is a special portfolio created using React to house the projects I've completed while attending the coding bootcamp through the University of Kansas - which is focused on full stack web development. I'm a 32-year old web developer hailing from Wichita, KS.
                <br />
                I have some previous experience from about 10 years ago when I attended Butler County Community College in their AAS degree program for web development, but had to withdraw and hadn't been able to get back into this field until I started the KU bootcamp. With this bootcamp though, despite being a lot shorter of a time, I have learned about way more varieties of web development technologies than I originally did.
                <br />
                I've learned and have become proficient in the more "basic" technologies like HTML, CSS, and Javascript to more advanced frameworks such as React - which is what is being used to create this site you're on now! Technology is amazing!
                <br />
                On my off time, I enjoy reading and writing, watching YouTube, listening to music (to which I'm an avid BTS fan 😉), and spending time with my cat, Wednesday - yes, she's a black cat.
                <br />
                Please feel free to check out some of the projects and assignments I've worked on for the bootcamp, and follow along as I create even more!
                </p>
            </div>
        </>
    );
}