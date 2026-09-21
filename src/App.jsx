import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const [wishName, setWishName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  // -----------------------------------------
  // COUNTDOWN
  // 26 September 2026 - 10:00 AM
  // -----------------------------------------
  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(2026, 8, 26, 10, 0, 0).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // -----------------------------------------
  // MUSIC
  // -----------------------------------------
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          alert("Please click the music button again to play the music.");
        });
    }
  };

  // -----------------------------------------
  // WISHES
  // -----------------------------------------
  const sendWish = () => {
    if (!wishName.trim() || !wishMessage.trim()) {
      alert("Please enter your name and wishes.");
      return;
    }

    alert(`Thank you ${wishName}! Your wishes have been received ❤️`);

    setWishName("");
    setWishMessage("");
  };

  // -----------------------------------------
  // CALL
  // -----------------------------------------
  const callNumber = () => {
    window.location.href = "tel:+919876543210";
  };

  // -----------------------------------------
  // MAPS
  // -----------------------------------------
  const openMaps = () => {
    window.open(
      "https://www.google.com/maps",
      "_blank"
    );
  };

  return (
    <div className="app">

      {/* MUSIC */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
      />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          Aaradhya Nilayam
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#welcome">Welcome</a>
          <a href="#family">Family</a>
          <a href="#schedule">Schedule</a>
          <a href="#wishes">Wishes</a>
          <a href="#location">Location</a>
        </div>
      </nav>

      {/* -----------------------------------------
          HERO
      ----------------------------------------- */}
      <section className="hero" id="home">

        {/* TOP GARLAND */}
        <img
          src="/dec3.png"
          alt=""
          className="hero-garland"
        />

        <div className="hero-content">

          <p className="hero-small">
            Inviting you to the House Warming Ceremony of
          </p>

          <h1>
            Aaradhya Nilayam
          </h1>

          <p className="hero-date">
            26 &nbsp;|&nbsp; September &nbsp;|&nbsp; 2026
          </p>

          <p className="hero-day">
            Saturday
          </p>

          <button
            className="map-button"
            onClick={openMaps}
          >
            Open in Maps
          </button>

        </div>

        {/* LEFT DECORATION */}
        <img
          src="/dec1.png"
          alt=""
          className="hero-decoration-image decoration-left"
        />

        {/* CENTER DECORATION */}
        <img
          src="/dec2.png"
          alt=""
          className="hero-decoration-image decoration-middle"
        />

        {/* COW */}
        <img
          src="/cow.png"
          alt=""
          className="hero-decoration-image cow-image"
        />

      </section>

      {/* -----------------------------------------
          WELCOME / COUNTDOWN
      ----------------------------------------- */}
      <section
        className="welcome"
        id="welcome"
      >
        <p className="section-small">
          Welcome to our home
        </p>

        <h2>
          Welcome to our home
        </h2>

        <div className="countdown">

          <div className="countdown-box">
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>

          <div className="countdown-box">
            <span>{timeLeft.hours}</span>
            <small>Hrs</small>
          </div>

          <div className="countdown-box">
            <span>{timeLeft.minutes}</span>
            <small>Mins</small>
          </div>

          <div className="countdown-box">
            <span>{timeLeft.seconds}</span>
            <small>Secs</small>
          </div>

        </div>

        <div className="welcome-message">
          “Together with their families, we cordially invite you
          to celebrate the housewarming.”
        </div>

      </section>

      {/* -----------------------------------------
          INVITATION
      ----------------------------------------- */}
      <section className="invitation">

        <p className="section-small">
          A Special Invitation
        </p>

        <h2>
          With love and blessings
        </h2>

        <p className="invitation-text">
          We warmly invite you and your family to join us
          as we celebrate the beginning of a beautiful new
          chapter in our home.
        </p>

        <p className="invitation-text">
          Your presence and blessings will make this
          occasion even more special.
        </p>

      </section>

      {/* -----------------------------------------
          FAMILY
      ----------------------------------------- */}
      <section
        className="family"
        id="family"
      >

        <p className="section-small">
          Together with our loved ones
        </p>

        <h2>
          Our Family
        </h2>

        <div className="family-content">

          <div className="family-photo-container">
            <img
              src="/fam.jpg"
              alt="Our Family"
              className="family-photo"
            />
          </div>

          <div className="family-text">

            <h3>
              Family
            </h3>

            <p>
              A graceful, compassionate soul with a
              radiant smile, deeply rooted in family
              values while embracing new dreams.
            </p>

            <p>
              Together, we look forward to celebrating
              this beautiful occasion with our family,
              friends and loved ones.
            </p>

          </div>

        </div>

      </section>

      {/* -----------------------------------------
          SCHEDULE
      ----------------------------------------- */}
      <section
        className="schedule"
        id="schedule"
      >

        <p className="section-small">
          Join us on our special day
        </p>

        <h2>
          Schedule
        </h2>

        <div className="schedule-container">

          <div className="schedule-card">
            <div className="schedule-time">
              10:00 AM
            </div>

            <h3>
              House Warming Ceremony
            </h3>

            <p>
              Traditional housewarming ceremony
              followed by blessings from family
              and loved ones.
            </p>
          </div>

          <div className="schedule-card">
            <div className="schedule-time">
              12:30 PM
            </div>

            <h3>
              Lunch
            </h3>

            <p>
              Please join us for a delicious lunch
              and celebrate this memorable day
              together.
            </p>
          </div>

        </div>

      </section>

      {/* -----------------------------------------
          WISHES
      ----------------------------------------- */}
      <section
        className="wishes"
        id="wishes"
      >

        <p className="section-small">
          Share your blessings
        </p>

        <h2>
          Send Your Wishes
        </h2>

        <p className="wishes-subtitle">
          Your lovely wishes and blessings will
          make our special day even more memorable.
        </p>

        <div className="wishes-card">

          <input
            type="text"
            placeholder="Your Name"
            value={wishName}
            onChange={(e) =>
              setWishName(e.target.value)
            }
            className="wish-input"
          />

          <textarea
            placeholder="Write your wishes..."
            value={wishMessage}
            onChange={(e) =>
              setWishMessage(e.target.value)
            }
            className="wish-input wish-message"
            rows="5"
          />

          <button
            className="wish-button"
            onClick={sendWish}
          >
            Send Wishes ❤️
          </button>

        </div>

      </section>

      {/* -----------------------------------------
          LOCATION
      ----------------------------------------- */}
      <section
        className="location"
        id="location"
      >

        <p className="section-small">
          We would love to have you with us
        </p>

        <h2>
          Location
        </h2>

        <div className="location-content">

          <div className="location-icon">
            📍
          </div>

          <p>
            Aaradhya Nilayam
          </p>

          <button
            className="location-button"
            onClick={openMaps}
          >
            Open in Maps
          </button>

          <button
            className="contact-button"
            onClick={callNumber}
          >
            Contact Host
          </button>

        </div>

      </section>

      {/* -----------------------------------------
          FOOTER
      ----------------------------------------- */}
      <footer className="footer">

        <p>
          With love and blessings
        </p>

        <h3>
          Aaradhya Nilayam
        </h3>

        <p>
          26 September 2026
        </p>

      </footer>

      {/* -----------------------------------------
          FLOATING BUTTONS
      ----------------------------------------- */}

      <button
        className="floating-button call-button"
        onClick={callNumber}
        aria-label="Call"
      >
        📞
      </button>

      <button
        className="floating-button music-button"
        onClick={toggleMusic}
        aria-label="Music"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

    </div>
  );
}

export default App;