import MainTitle from "../MainTitle/MainTitle";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project-info">
      <MainTitle text={"О проекте"} />
      <div className="project-info__text-container">
        <div>
          <h3 className="project-info__main-text">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project-info__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="project-info__main-text">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project-info__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project-info__timeline-container">
        <div className="project-info__timeline project-info__timeline_backend">
          <div className="timeline__weeks timeline__weeks_first">1 неделя</div>
          <p className="timeline__ps">Back-end</p>
        </div>
        <div className="project-info__timeline project-info__timeline_frontend">
          <div className="timeline__weeks timeline__weeks_four">4 недели</div>
          <p className="timeline__ps">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
