import { Component } from "react";
import { Contact } from "./Contact";

export class ContactsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onDeleteContact, onToggleFavorite } = this.props;
        return (
            <ul>
                {this.props.contacts.map(({ id, name, phone, isFavorite }) => (
                    <Contact
                        key={id}
                        name={name}
                        phone={phone}
                        isFavorite={isFavorite}
                        onDeleteContact={() => onDeleteContact(id)}
                        onToggleFavorite={() => onToggleFavorite(id)}
                    />
                ))}
                {/* Must include a key to help react optimizations, 
                the key should be uniquelocally(in the list) 
                Not an index, unless there is no other option*/}
            </ul>
        );
    }
}
