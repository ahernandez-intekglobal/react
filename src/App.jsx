import React from "react";
import { Tabs } from "./components/Tabs";
import { ContactsApp } from "./components/ContactApp";
import { CounterApp } from "./components/CounterApp";

class App extends React.Component {
    constructor() {
        super();
        this.state = { currentTab: 0 };
        this.infoTabs = [
            { title: "Contacts", component: ContactsApp },
            { title: "Counters", component: CounterApp },
        ];
    }
    componentDidMount() {
        this.setState({ currentTab: this.getCurrentTab() });
    }
    getCurrentTab() {
        const currentLocation = window.location.hash;
        const tabIndex = currentLocation[currentLocation.length - 1];
        if (tabIndex) {
            return +tabIndex;
        }
        return 0;
    }
    render() {
        const { currentTab } = this.state;

        return (
            <>
                <Tabs
                    infoTabs={this.infoTabs}
                    currentTab={currentTab}
                    onTabSelect={(selectedTab) => {
                        this.setState({ currentTab: selectedTab });
                    }}
                />
            </>
        );
    }
}

export default App;
/*00  1:00
create an utility function to manage immutable state. Make a shallow copy
Proxy. May check mongoDB
2. Optional classes: create an utility function to conditionally add classes
Give a series of classes and get the concatenated version 
Pass an object which keys will be the class name, and if set the class should be added to the element
i.e. custom version of clsx*/
