import { useNavigate } from "react-router-dom";
import "./MovieCard.css"; // استایل‌های مربوط به کارت فیلم

// آدرس پایه برای دریافت تصاویر از TMDB
const IMGPATH = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movie/${data.id}`)} className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={IMGPATH + data.poster_path} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
