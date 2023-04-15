import React from 'react';
import Header from '../../components/header/header';
import MyListButton from '../../components/my-list-button/my-list-button';
import PlayButton from '../../components/play-button/play-button';

type PromoFilmProps = {
  name: string;
  genre: string;
  released: number;
  isFavorite: boolean;
  countOfMyFilms: number;
};

function PromoFilm({name, genre, released, isFavorite, countOfMyFilms}: PromoFilmProps): JSX.Element {
  const handleMyListClick = () => {
    isFavorite = !isFavorite;
  };
  const handlePlayClick = () => {
    isFavorite = !isFavorite;
  };
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      < Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton handleClick={handlePlayClick} />
              <MyListButton countOfMyFilms={countOfMyFilms} handleClick={handleMyListClick} isFavorite={isFavorite} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(PromoFilm);
