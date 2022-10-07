import { FaBars, FaTimes, FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState, useEffect } from "react";
import data from "../assets/data/tarotCards"
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../components/NavBar";

const Home = () => {

    //NavBar Funtionality
    const navRef = useRef();
    const [scrolled, setScrolled] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    useEffect(() => { //see if its scroolled or not
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // cards container functionality
    const [cards, setCards] = useState(data.tarot_interpretations);
    const [sorted, setSorted] = useState({sorted:"rank", reversed: false});
    
    const sortByRank = () => {
        setSorted({sorted:"rank", reversed: !sorted.reversed});
        const cardsCopy = [...cards];
        cardsCopy.sort((a, b) => {
            if(sorted.reversed) {
                return a.rank - b.rank;
            }
            return b.rank - a.rank;
        })
        setCards(cardsCopy);
    }

    const sortByName = () => {
        setSorted({sorted:"name", reversed: !sorted.reversed});
        const cardsCopy = [...cards];
        cardsCopy.sort((a, b) => {
            const cardNameA = a.name;
            const cardNameB = b.name
            if(sorted.reversed) {
                return cardNameB.localeCompare(cardNameA);
            }
            return cardNameA.localeCompare(cardNameB);
        })
        setCards(cardsCopy);
    }

    const renderArrow = () => {
        if(sorted.reversed) {
            return <FaArrowDown />
        }
        return <FaArrowUp />
    }

    //search imput logic
    const search = (event) => {
        const filteredCards = data.tarot_interpretations.filter((card) => {
            return card.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setCards(filteredCards);
        setInputValue(event.target.value);
    }


    return (
        <main>
            <header>
                <nav ref={navRef} className={scrolled ? "scrolled" : ""}>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes />
                    </button>
                    <Link to="/about" className="nav-link">About Tarot</Link>
                    <p className="nav-sort" onClick={sortByRank}>
                        <span>Sort by Rank</span>
                        {sorted.sorted === "rank" ? renderArrow() : null}
                    </p>
                    <p className="nav-sort" onClick={sortByName}>
                        <span>Sort Alphabetically</span>
                        {sorted.sorted === "name" ? renderArrow() : null}
                    </p>
                    <div className="input-container">
                        <input type="text" 
                        className="text-input" 
                        placeholder="Search by card name..." 
                        value={inputValue} 
                        onChange={search} />
                        <FaSearch className="search-btn" />
                    </div>
                </nav>
                <button onClick={showNavBar} className="nav-btn">
                    <FaBars />
                </button>
            </header>
            <section className="cards-container">
                {
                    cards.map((card, index) => {
                        return (
                            <Card key={index} card={card} />
                        )
                    })
                }
            </section>
            <Footer />
        </main>
    )
}

export default Home;