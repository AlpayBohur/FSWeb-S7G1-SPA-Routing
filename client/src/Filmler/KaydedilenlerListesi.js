import React from "react";
import { NavLink } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <NavLink
          to={`/filmler/${movie.id}`}
          className={(isActive) => (isActive ? "active" : null)}
        >
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <NavLink
        exact
        to="/"
        className={(isActive) => (isActive ? "hide" : null)}
      >
        <div className="home-button">Anasayfa</div>
      </NavLink>
    </div>
  );
}
