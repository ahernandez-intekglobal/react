import { Component } from "react";
import styles from "./styles.module.css";
import { PhoneNumber } from "../Phone";
import { getClassNames } from "../../../util/className.js"

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { isPhoneHidden: false };
    }
    render() {
        const { isPhoneHidden } = this.state;
        const { name, phone, isFavorite, onDeleteContact, onToggleFavorite } =
            this.props;
        return (
            <li
                className={`${styles.contact} ${
                    isFavorite ? styles.favorite : ""
                }`}
            >
                <h4 onClick={onToggleFavorite}>Name: {name}</h4>
                <p
                    className={getClassNames("SpecialClass", [
                        "leaf",
                        { isRoot: false, isParagraph: true },
                    ])}
                    onClick={() =>
                        this.setState({
                            isPhoneHidden: !isPhoneHidden,
                        })
                    }
                >
                    Phone:
                    {!isPhoneHidden && <PhoneNumber phone={phone} />}
                </p>
                <button onClick={onDeleteContact}>Delete</button>
            </li>
        );
    }
}
