"use client";
import { CommonText } from "@/styles/commont_text";
import { useResponsive } from "@/utils/responsive_helper";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import { DashboardCustomizeOutlined, Logout, Person, Settings } from "@mui/icons-material";

export default function Dashboard(){
const { w, h, t } = useResponsive(),
      styles: { [key: string]: React.CSSProperties } = {
        container: {
          display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
          flexDirection: "row",
          width: "100%",
        },
        sidebar: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width:  `${w(280)}px`,
            height: `${h(1024)}px`,
            backgroundColor: "var(--gray-5)",
        },
        tabList: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: `${w(220)}px`,
            height: "auto",
        },
        tab: {
            display: "flex",
            alignItems: "center",
            width: `${w(220)}px`,
            height: `${h(50)}px`,
            marginBottom: `${h(10)}px`,
            cursor:"pointer",
        },
        selectedTab: {
            display: "flex",
            alignItems: "center",
            borderRadius: "0px 10px 10px 0px",
            borderLeft: "3px solid var(--primary-500)",
            width: `${w(220)}px`,
            height: `${h(50)}px`,
            marginBottom: `${h(10)}px`,
            backgroundColor: "var(--primary-5)",
            cursor:"pointer",
        },
        tabText: {
            ...CommonText.body1Bold,
            color: "var(--gray-900)",
        },
        selectedTabText: {
            ...CommonText.body1Bold,
            color: "var(--primary-500)",
        },
        tabIcon: {
            color: "var(--gray-900)",
            marginRight: `${w(16)}px`,
            marginLeft: `${w(16)}px`,
            fontSize: `${t(24)}px`,
        },

        selectedTabIcon: {
            color: "var(--primary-500)",
            marginRight: `${w(16)}px`,
            marginLeft: `${w(16)}px`,
            fontSize: `${t(24)}px`,
        },

      };

      const tabList = [
        { name: "Dashboard", icon: <DashboardCustomizeOutlined style={styles.selectedTabIcon}></DashboardCustomizeOutlined> },
        { name: "Setting", icon: <Settings style={styles.tabIcon}></Settings> },
        { name: "Profile", icon: <Person style={styles.tabIcon}></Person> },
        { name: "Logout", icon: <Logout style={styles.tabIcon}></Logout> },
      ];

    return (
        <div >
            <div style={styles.sidebar}>
                <div style={styles.tabList}>
                    <div style={{height: `${h(110)}px`}}></div>
                {tabList.map((tab, index) => (
                        <div key={index} style={styles.tab} onClick={() => console.log(tab.name)} >
                            {tab.name === "Dashboard" ? (
                                <div style={styles.selectedTab}>
                                    {tab.icon}
                                    <label style={styles.selectedTabText}>{tab.name}</label> 
                                </div>
                            ) : (
                                <div style={styles.tab}>
                                    {tab.icon}
                                    <label style={styles.tabText}>{tab.name}</label> 
                                </div>
                            )}
                        </div>
                    ))}
                        </div>
            </div>
        </div>
    );

}