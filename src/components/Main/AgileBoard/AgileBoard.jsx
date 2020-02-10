import React from "react";
import style from "./style.module.scss";
import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Icon } from "antd";
// import Cards from "./Cards/Cards";
import Cards from "./Cards/Cards";

const AgileBoard = () => {
  return (
    <Container className={style.agileBoard__container}>
      <div>
        <Breadcrumb className={style.agileBoard__container__breadcrumb}>
          <BreadcrumbItem>Projects</BreadcrumbItem>
          <BreadcrumbItem>singularity 1.0</BreadcrumbItem>
          <BreadcrumbItem>Kanban</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className={style.agileBoard__container__header}>
        <h1>Kanban Board</h1>
        <button className={style.agileBoard__container__header__button}>
          <Icon
            type="github"
            className={style.agileBoard__container__header__button__icon}
          />
          <span>Github Repo</span>
        </button>
      </div>
      <div className={style.agileBoard__container__searchSection}>
        <div className={style.agileBoard__container__searchSection__searchbar}>
          <i
            className={`fe fe-search ${style.agileBoard__container__searchSection__searchbar__icon}`}
          />
          <input></input>
        </div>
        <div className={style.agileBoard__container__searchSection__profiles}>
          <div
            className={
              style.agileBoard__container__searchSection__profiles__profile
            }
          >
            <div
              className={
                style.agileBoard__container__searchSection__profiles__profile__img1
              }
            ></div>
          </div>
          <div
            className={
              style.agileBoard__container__searchSection__profiles__profile
            }
          >
            <div
              className={
                style.agileBoard__container__searchSection__profiles__profile__img2
              }
            ></div>
          </div>
          <div
            className={
              style.agileBoard__container__searchSection__profiles__profile
            }
          >
            <div
              className={
                style.agileBoard__container__searchSection__profiles__profile__img3
              }
            ></div>
          </div>
        </div>

        <button>Only My Issues</button>
        <button>Recently Updated</button>
      </div>
      <Cards />
    </Container>
  );
};

export default AgileBoard;
