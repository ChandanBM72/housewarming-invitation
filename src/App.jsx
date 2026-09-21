import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // =========================
  // COUNTDOWN
  // =========================

  const getTimeLeft = () => {
    // September = month 8 because JavaScript months start from 0
    const target = new Date(2026, 8, 26, 10, 0, 0).getTime();
    const now = new Date().getTime();

    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =========================
  // MUSIC
  // =========================

  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setMusicPlaying(true);
        })
        .catch(() => {
          alert("Please click the music button again to play the music.");
        });
    }
  };

  // =========================
  // SEND WISHES
  // =========================

  const [wishName, setWishName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  const sendWish = () => {
    if (!wishName.trim() || !wishMessage.trim()) {
      alert("Please enter your name and wishes.");
      return;
    }

    alert(`Thank you, ${wishName}! ❤️\n\nYour wishes have been received.`);

    setWishName("");
    setWishMessage("");
  };

  // =========================
  // CALL BUTTON
  // =========================

  const dummyNumber = "+91 98765 43210";

  const callNumber = () => {
    window.location.href = "tel:+919876543210";
  };

  // =========================
  // MAPS
  // =========================

  const openMaps = () => {
    window.open(
      "https://www.google.com/maps",
      "_blank"
    );
  };

  return (
    <div className="app">

      {/* =========================
          BACKGROUND MUSIC
      ========================= */}

      <audio ref={audioRef} src="/music.mp3" loop />

      {/* =========================
          NAVBAR
      ========================= */}

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

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero" id="home">

        {/* Top decoration */}
        <img
          src="/dec3.png"
          alt=""
          className="hero-garland"
        />

        <div className="hero-content">

          <p className="hero-small">
            Inviting you to the
          </p>

          <h1>
            House Warming
            <br />
            Ceremony
          </h1>

          <p className="hero-of">
            of
          </p>

          <h2 className="hero-house">
            Aaradhya Nilayam
          </h2>

          <div className="hero-date">
            <span>26</span>
            <span>|</span>
            <span>September</span>
            <span>|</span>
            <span>2026</span>
          </div>

          <p className="hero-day">
            Saturday
          </p>

          <button
            className="map-button"
            onClick={openMaps}
          >
            📍 Open in Maps
          </button>

        </div>

        {/* Bottom decorations */}

        <img
          src="/dec1.png"
          alt=""
          className="hero-decoration-image decoration-left"
        />

        <img
          src="/dec2.png"
          alt=""
          className="hero-decoration-image decoration-middle"
        />

        <img
          src="/cow.png"
          alt="Cow"
          className="cow-image"
        />

      </section>

      {/* =========================
          WELCOME SECTION
      ========================= */}

      <section className="welcome" id="welcome">

        <p className="section-small">
          With love and happiness
        </p>

        <h2>
          We Invite You
        </h2>

        <p className="welcome-text">
          With immense joy and gratitude, we invite you
          to be a part of our special day as we celebrate
          the beginning of a beautiful new chapter in our
          new home.
        </p>

        {/* COUNTDOWN */}

        <div className="countdown">

          <div className="count-box">
            <span>{String(timeLeft.days).padStart(2, "0")}</span>
            <small>Days</small>
          </div>

          <div className="count-box">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <small>Hours</small>
          </div>

          <div className="count-box">
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <small>Minutes</small>
          </div>

          <div className="count-box">
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            <small>Seconds</small>
          </div>

        </div>

      </section>

      {/* =========================
          INVITATION SECTION
      ========================= */}

      <section className="invitation">

        <p className="section-small">
          A new beginning
        </p>

        <h2>
          You Are Invited
        </h2>

        <div className="invitation-line"></div>

        <p>
          Your presence will make this auspicious
          occasion even more special.
        </p>

        <p>
          Come and bless our new home with your
          love, happiness and good wishes.
        </p>

      </section>

      {/* =========================
          FAMILY SECTION
      ========================= */}

      <section className="family" id="family">

        <p className="section-small">
          Together with our family
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
              With Love From Our Family
            </h3>

            <p>
              We are delighted to welcome you to
              our new home and share this memorable
              occasion with all our loved ones.
            </p>

            <p>
              Your blessings and presence mean
              the world to us.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          SCHEDULE SECTION
      ========================= */}

      <section className="schedule" id="schedule">

        <p className="section-small">
          Save the date
        </p>

        <h2>
          The Celebration
        </h2>

        <div className="schedule-container">

          <div className="schedule-card">

            <div className="schedule-icon">
              🏠
            </div>

            <h3>
              House Warming Ceremony
            </h3>

            <p>
              Saturday, 26 September 2026
            </p>

            <strong>
              10:00 AM onwards
            </strong>

          </div>

          <div className="schedule-card">

            <div className="schedule-icon">
              🍽️
            </div>

            <h3>
              Lunch
            </h3>

            <p>
              Saturday, 26 September 2026
            </p>

            <strong>
              12:30 PM onwards
            </strong>

          </div>

        </div>

      </section>

      {/* =========================
          SEND YOUR WISHES
      ========================= */}

      <section className="wishes" id="wishes">

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
            onChange={(e) => setWishName(e.target.value)}
            className="wish-input"
          />

          <textarea
            placeholder="Write your wishes..."
            value={wishMessage}
            onChange={(e) => setWishMessage(e.target.value)}
            className="wish-input wish-message"
            rows="5"
          ></textarea>

          <button
            className="wish-button"
            onClick={sendWish}
          >
            Send Wishes ❤️
          </button>

        </div>

      </section>

      {/* =========================
          LOCATION SECTION
      ========================= */}

      <section className="location" id="location">

        <p className="section-small">
          We look forward to seeing you
        </p>

        <h2>
          Location
        </h2>

        <p className="location-text">
          Aaradhya Nilayam
          <br />
          Your New Home Address
        </p>

        <button
          className="map-button"
          onClick={openMaps}
        >
          📍 Get Directions
        </button>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <h3>
          Aaradhya Nilayam
        </h3>

        <p>
          House Warming Ceremony
        </p>

        <p>
          26 September 2026
        </p>

        <div className="footer-line"></div>

        <p className="footer-small">
          With love and gratitude ❤️
        </p>

      </footer>

      {/* =========================
          FLOATING BUTTONS
      ========================= */}

      <div className="floating-buttons">

        <button
          className="floating-button"
          onClick={callNumber}
          title={`Call ${dummyNumber}`}
        >
          ☎
        </button>

        <button
          className="floating-button"
          onClick={toggleMusic}
          title={musicPlaying ? "Pause music" : "Play music"}
        >
          {musicPlaying ? "🔇" : "🔊"}
        </button>

      </div>

    </div>
  );
}

export default App;