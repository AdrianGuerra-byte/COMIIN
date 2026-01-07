import { useState, useEffect, useCallback, useRef } from 'react';
import './ReviewsCarousel.css';

interface Review {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Dra. Karla Salazar Serna",
    role: "Conferencista Magistral",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    text: "Sin duda el diálogo genera conocimiento, y cuando existen oportunidades para establecer espacios académicos donde los aportes científicos se colocan al servicio de la sociedad y se materializan en esfuerzos colectivos e interinstitucionales se abren grandes posibilidades para fortalecer no sólo vínculos académicos, sino esfuerzos colectivos orientados a transformaciones efectivas sobre las problemáticas sociales que aquejan a la sociedad. El Congreso realizado representa todo lo anterior.",
    rating: 5
  },
  {
    name: "Dr. Francisco Rojo Muñoz",
    role: "Conferencista",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    text: "El 1er Congreso de Investigación en Ciencias Sociales y Humanidades del CUH fue una experiencia académica valiosa. Destacó la calidad de las ponencias, el diálogo entre investigadores y el interés por abordar problemáticas sociales actuales. Fue un espacio que fortaleció la reflexión y motivó a continuar desarrollando investigación con impacto.",
    rating: 4.5
  },
  {
    name: "Dra. Laura Georgina Ortega Luna",
    role: "Coordinadora de Mesa y Ponente",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    text: "Muy buenos anfitriones, muy interesantes las actividades y las discusiones.",
    rating: 5
  }
];

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return { full: fullStars, half: hasHalfStar ? 1 : 0, empty: emptyStars };
}

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = reviews.length;
  const minSwipeDistance = 50;

  // Función para ir a un slide específico
  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    let newIndex = index;

    if (index < 0) newIndex = totalSlides - 1;
    if (index >= totalSlides) newIndex = 0;

    setCurrentIndex(newIndex);

    setTimeout(() => setIsAnimating(false), 500);
  }, [totalSlides, isAnimating]);

  // Siguiente slide
  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  // Slide anterior
  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
      setIsAutoPlaying(false);
    } else if (isRightSwipe) {
      prevSlide();
      setIsAutoPlaying(false);
    }
  };

  // Pausar autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <header className="section-header">
          <h2>Reseñas de Participantes</h2>
          <p>Lo que dicen quienes han vivido la experiencia COMIIN</p>
        </header>

        <div
          className="carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Botón anterior */}
          <button
            className="carousel-btn carousel-btn-prev"
            aria-label="Reseña anterior"
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
          >
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
          </button>

          {/* Contenedor del carrusel */}
          <div
            className="carousel-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => {
                const stars = renderStars(review.rating);
                return (
                  <article
                    key={index}
                    className={`review-slide ${index === currentIndex ? 'active' : ''}`}
                  >
                    <div className="review-card">
                      {/* Icono de comillas */}
                      <div className="quote-icon">
                        <i className="fas fa-quote-left" aria-hidden="true"></i>
                      </div>

                      {/* Texto de la reseña */}
                      <blockquote className="review-text">
                        {review.text}
                      </blockquote>

                      {/* Rating */}
                      <div
                        className="review-rating"
                        aria-label={`Calificación: ${review.rating} de 5 estrellas`}
                      >
                        {[...Array(stars.full)].map((_, i) => (
                          <i key={`full-${i}`} className="fas fa-star" aria-hidden="true"></i>
                        ))}
                        {stars.half > 0 && (
                          <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                        )}
                        {[...Array(stars.empty)].map((_, i) => (
                          <i key={`empty-${i}`} className="far fa-star" aria-hidden="true"></i>
                        ))}
                      </div>

                      {/* Autor */}
                      <footer className="review-author">
                        <div className="review-avatar">
                          <img
                            src={review.avatar}
                            alt={`Foto de ${review.name}`}
                            loading="lazy"
                          />
                        </div>
                        <div className="review-info">
                          <h3>{review.name}</h3>
                          <p>{review.role}</p>
                        </div>
                      </footer>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            className="carousel-btn carousel-btn-next"
            aria-label="Reseña siguiente"
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
          >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>

        {/* Indicadores */}
        <div className="carousel-indicators" role="tablist" aria-label="Seleccionar reseña">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir a reseña ${index + 1}`}
              onClick={() => { goToSlide(index); setIsAutoPlaying(false); }}
            />
          ))}
        </div>

        {/* Progress bar del autoplay */}
        <div className="autoplay-progress">
          <div
            className={`progress-bar ${isAutoPlaying ? 'playing' : ''}`}
            key={currentIndex}
          />
        </div>
      </div>
    </section>
  );
}
