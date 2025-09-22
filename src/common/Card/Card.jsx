import "./Card.css";

export default function Card({ card }) {
  const srcSet = `${card.img} 1x, ${card.img_2x} 2x`;
  return (
    <>
      <div className="card">
        <div className="card-image-wrapper">
          <img
            src={card.img}
            alt={card.title}
            srcSet={srcSet}
            loading="lazy"
            decoding="async"
            className="card-image"
          />
        </div>
        <div className="card-content">
          <h2 className="card-tag">{card.tags}</h2>
          <h3 className="card-title">{card.title}</h3>
          <div className="card-meta">
            <span className="card-meta-author">{card.autor}</span>
            <span className="card-meta-circle"></span>
            <span className="card-meta-info">{card.date}</span>
            <span className="card-meta-circle"></span>
            <span className="card-meta-info">{card.views}</span>
          </div>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    </>
  );
}
