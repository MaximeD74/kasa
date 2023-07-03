import '../../styles/rating.scss'

function Rating ({ rating }) {
    const stars = [];
  
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
  
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fas fa-star empty"></i>);
    }
  
    return <div className="rating">{stars}</div>;
  };
  
  export default Rating;