import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../App.css";
import tarotImage1 from "../assets/img/tarot-img-1.svg";
import tarotImage2 from "../assets/img/tarot-img-2.svg";

const About = () => {
    return (
        <main>
            <NavBar />
            <div className="about-content">
                <h2 className="about-title">Tarot Cards</h2>
                <section className="about-text">
                    <img src={tarotImage1} alt="Tarot Cards 1"/>
                    <p>Like many forms of divination,
                        Tarot cards are a tool to help you tap into your own intuition and the wisdom of the
                        universal energy that guides your life. Tarot, which has origins in 14th century Europe,
                        is not a form of fortune-telling. It"s more like a mirror that reflects what is happening
                        in your life at the moment. Tarot is able to tap into hidden thoughts, feelings, and truths
                        and bring them to the surface so you can use that information to make decisions about life,
                        love, emotions, health, career, and more.</p>
                </section>
                <h2 className="about-title">About Tarot Card Decks</h2>
                <section>
                    <p>Most Tarot card decks consist of 78 Tarot cards broken into a Major Arcana (22 cards) and a Minor Arcana (56 cards).
                        The Major Arcana cards typically represent significant life events on a large scale, while the Minor Arcana cards deal with day-to-day life.
                        The Minor Arcana includes four "suits" that each has a theme. Each suit is numbered one through 10, with four additional Court cards (Page,
                        Knight, Queen and King).</p>
                    <div className="about-text">
                    <img src={tarotImage2} alt="Tarot Cards 2"/>
                        <ul>
                            <li> Pentacles -- Also referred to as "Disks" or "Coins," cards in the Pentacles suit pertain to things in the material and physical world.
                                Pentacles cards often indicate money matters, career and success, but they also can indicate levels of emotional and spiritual prosperity, too.</li>
                            <li> Wands -- Sometimes called "Staffs," the suit of Wands is more spiritual and is used to illustrate the energy of movement, growth and new
                                beginnings. Wands represent ideas and innovation. They are often related to your career or your sense of purpose in the world, but they can deliver
                                strong love messages, too.</li>
                            <li> Cups -- The suit of Cups is connected to our emotions and to our relationships, and to matters of the soul. Cups cards can reveal how we truly
                                feel -- and how others truly feel about us. They also speak of our emotional well-being.</li>
                            <li> Swords -- The Swords cards are most associated with conflict and strife, which can refer to internal conflict, as well. Swords cut to the heart of a
                                matter, revealing our greatest challenges. They can tell of illness, heartbreak, war, loss and death, but they can also reveal truths we need to face in
                                order to move forward, which ultimately is a positive thing.</li>
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default About;