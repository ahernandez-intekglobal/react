import { Component } from "react";
import styles from "./style.module.css";
import { getClassNames } from "../../util/className.js"

export class Tabs extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(){
        const {currentTab, infoTabs} = this.props;
        document.title = infoTabs[currentTab].title;
        window.location.hash=`#${currentTab}`;
    }
    render() {
        const { infoTabs, currentTab, onTabSelect } = this.props;
        const tabs = infoTabs.map((tab, index) => {
            return (
                <h3
                    className={getClassNames(styles.title, {
                        [styles.activeTab]: index === currentTab,
                    })}
                    key={tab.title}
                    onClick={() => onTabSelect(index)}
                >
                    {tab.title}
                </h3>
            );
        });
        const App = infoTabs[currentTab].component;
        {
            /*the component need a key to tell react that we are dealing with some 
            same component, even if the element change its position */
        }
        return (
            <>
                <nav className={styles.navigation}>{tabs}</nav>
                <App />
            </>
        );
    }
}
