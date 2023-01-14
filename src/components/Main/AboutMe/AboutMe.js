import MainTitle from "../MainTitle/MainTitle";
import Link from "../../UI/Link/Link";
import Portfolio from "../Portfolio/Portfolio";

import studentPhoto from "../../../images/student_zip.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student">
      <MainTitle text={"Студент"} />
      <div className="student__info">
        <div className="student__text-container">
          <h2 className="student__name">Виталий</h2>
          <h3 className="student__profession">Фронтенд-разработчик, 30 лет</h3>
          <p className="student__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            isRouterLink={false}
            to="https://github.com/K4realD"
            styles={"student__github"}
          >
            Github
          </Link>
        </div>
        <img
          className="student__image"
          src={studentPhoto}
          alt="Портрет студента"
        />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
