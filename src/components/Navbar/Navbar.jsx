import React from "react";
import {  NavLink } from "react-router-dom";

import { Layout } from "antd";
import style from "./style.module.scss";
import Image from "./../../images/img.PNG";


const { Sider } = Layout;

class MenuLeft extends React.Component {
  state = {
    // isVisible: true,
    items: [
      {
        name: "Kanban board",
        icon: "fe fe-credit-card",
        navlink: "/",
        id: "kanban board"
      },
      {
        name: "Project settings",
        icon: "fe fe-settings",
        navlink: "/projectSettings",
        id: "Project Settings"
      }
    ],
    secondItems: [
      { name: "Release", icon: "fe fe-truck", id: "Release", isVisible: true },
      {
        name: "Issues and filters",
        icon: "fe fe-server",
        id: "Issues and filters",
        isVisible: true
      },
      { name: "Pages", icon: "fe fe-file-text", id: "Pages", isVisible: true },
      {
        name: "Reports",
        icon: "fe fe-trending-up",
        id: "Reports",
        isVisible: true
      },
      {
        name: "Components",
        icon: "fe fe-package",
        id: "Components",
        isVisible: true
      }
    ]
  };

  onMouseEnterHandler = id => {
    this.setState({
      secondItems: this.state.secondItems.map(item => {
        if (item.id === id) {
          item.isVisible = false;
        }
        return item;
      })
    });
  };

  onMouseLeaveHandler = id => {
    this.setState({
      secondItems: this.state.secondItems.map(item => {
        if (item.id === id) {
          item.isVisible = true;
        }
        return item;
      })
    });
  };

  render() {
    console.log(this.state.isVisible);
    return (
      <Sider className={style.air__menuLeft}>
        <div className={style.air__menuLeft__outer}>
          <div className={style.air__menuLeft__outer__header}>
            <img src={Image} alt="img" />
            <div className={style.air__menuLeft__outer__header__section}>
              <h4>singularity 1.0</h4>
              <p> Software project</p>
            </div>
          </div>
          <ul className={style.air__menuLeft__outer__firstList}>
            {this.state.items.map(item => (
              <NavLink
                to={item.navlink}
                activeClassName={
                  style.air__menuLeft__outer__firstList__activeItem
                }
              >
                <li className={style.air__menuLeft__outer__firstList__listItem}>
                  <i className={item.icon}></i>
                  <span
                    className={
                      style.air__menuLeft__outer__firstList__listItem__span
                    }
                  >
                    {item.name}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
          <hr className={style.air__menuLeft__outer__hr}></hr>
          <ul className={style.air__menuLeft__outer__secondList}>
            {this.state.secondItems.map(item => (
              <li
                className={style.air__menuLeft__outer__secondList__listItem}
                key={item.name}
              >
                <i className={item.icon} />
                <span
                  id={item.name}
                  onMouseEnter={() => {
                    this.onMouseEnterHandler(item.name);
                  }}
                  onMouseLeave={() => {
                    this.onMouseLeaveHandler(item.name);
                  }}
                  className={
                    style.air__menuLeft__outer__secondList__listItem__span
                  }
                >
                  {item.isVisible === true ? (
                    item.name
                  ) : (
                    <div
                      className={
                        style.air__menuLeft__outer__secondList__listItem__span__div
                      }
                    >
                      NOT IMPLEMENTED
                    </div>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Sider>
    );
  }
}

export default MenuLeft;
