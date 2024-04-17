import { Component } from "react";

export class ContactsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", phone: "" };
    }
    render() {
        const { name, phone } = this.state;
        const { onAddContact } = this.props;
        return (
            <form
                action=""
                onSubmit={(event) => {
                    event.preventDefault();
                    const { name, phone } = this.state;
                    this.props.onAddContact({ name, phone });
                    this.setState({ name: "", phone: "" });
                }}
            >
                <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    value={name}
                    onChange={({ target }) => {
                        this.setState({ name: target.value });
                    }}
                />
                <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    value={phone}
                    onChange={({ target }) => {
                        this.setState({ phone: target.value });
                    }}
                />
                <button>Add</button>
            </form>
        );
    }
}
