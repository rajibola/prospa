import React from "react";
import styles from "./Dashboard.module.css";
import arrowDownThin from "../../assets/images/arrow-down-thin.svg";
import avatar from "../../assets/images/avatar.svg";
import menu from "../../assets/images/menu.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import bell from "../../assets/images/bell.svg";
import { AccountDetails, sideBarData, Dropdown } from "../../mock/dashboard";
import prospa from "../../assets/images/gray-logo.svg";
import Button from "../../components/Button/Button";
import AccountCard from "../../components/AccountCard/AccountCard";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import OutflowCard from "../../components/OutflowCard/OutflowCard";
import RecentCard from "../../components/RecentCard/RecentCard";
import { Mobile } from "../../utils";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class Dashboard extends React.Component {
  state = {
    drop: false,
    option: "account",
    sidebar: false,
  };

  render() {
    return (
      <div className={styles.container}>
        {Mobile ? (
          <Slide left={Mobile} when={Mobile && this.state.sidebar}>
            {this.renderSidebar()}
          </Slide>
        ) : (
          this.renderSidebar()
        )}

        <div className={styles.mainContainer}>
          <div className={styles.header}>
            {Mobile && (
              <img
                src={menu}
                alt="menu"
                className={styles.menu}
                onClick={() => this.setState({ sidebar: !this.state.sidebar })}
              />
            )}
            <div className={styles.headerText}>Dashboard</div>
            <div className={styles.wrapper}>
              <div className={styles.bell}>
                <img src={bell} alt="bell" />
              </div>
              <img src={avatar} alt="avatar" />
            </div>
          </div>

          <div className={styles.welcome}>
            <div>
              <div className={styles.title}>Welcome back, Kathy</div>
              <div className={styles.subtitle}>
                Here’s what has been happening in the last <span>7 days</span>
              </div>
            </div>
            <Button title="Add a sub account" width />
          </div>

          {this.renderCards()}
        </div>
      </div>
    );
  }

  renderCards() {
    return (
      <div className={styles.cardSection}>
        {AccountDetails.map((item, i) => (
          <AccountCard data={item} key={i} />
        ))}
        <SummaryCard />
        <OutflowCard />
        <RecentCard />
      </div>
    );
  }

  renderSidebar() {
    return (
      <div
        className={styles.sidebar}
        style={{
          display: Mobile && !this.state.sidebar && `none`,
        }}
      >
        {Mobile && (
          <div
            className={styles.cancel}
            onClick={() => this.setState({ sidebar: false })}
          >
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
        )}
        <img src={prospa} alt="logo" />
        <div className={styles.sidebarHeader}>
          <div className={styles.initials}>BN</div>

          <div className={styles.details}>
            <div className={styles.detailsName}>Clayvant Inc</div>
            <div className={styles.detailsSetting}>Manage account</div>
          </div>

          <div className={styles.dropdownContainer}>
            <div
              className={styles.arrowDown}
              onClick={() => this.setState({ drop: !this.state.drop })}
            >
              <img src={arrowDownThin} alt="down-arrow" />
            </div>
            {this.state.drop && (
              <div className={styles.dropdown}>
                {Dropdown.map((item, i) => (
                  <Fade top>
                    <div key={i} className={styles.dropdownList}>
                      {item}
                    </div>
                  </Fade>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          {sideBarData.map((item, i) => (
            <div
              className={styles.list}
              key={i}
              onClick={() => this.setState({ option: item.name })}
            >
              <img src={item.icon} alt={item.icon} />
              <div
                style={{
                  color:
                    this.state.option.toLowerCase() ===
                      item.name.toLowerCase() && `var(--pink)`,
                }}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
