import React from "react";
// import "../../App.css";
import { ContactsForm } from "./ContactsForm.jsx";
import { ContactsList } from "./ContactsList.jsx";

export class ContactsApp extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                { name: "Jhon", phone: "123456", isFavorite: true, id: 0 },
            ],
            nextId: 1,
        };
    }
    // componentDidMount() {
    //     window.location.hash = "#0"
    // }
    // componentWillUnmount() {
    //     console.log("Component is about to be removed");
    // }
    render() {
        const { contacts, nextId } = this.state;
        const filteredContacts = contacts.reduce(
            (res, current) => {
                current.isFavorite
                    ? res.favorites.push(current)
                    : res.nonfavorites.push(current);
                return res;
            },
            { favorites: [], nonfavorites: [] }
        );
        const orderedContacts = [
            ...filteredContacts.favorites,
            ...filteredContacts.nonfavorites,
        ];
        return (
            <>
                <ContactsForm
                    onAddContact={(newContact) =>
                        this.setState({
                            contacts: [
                                ...contacts,
                                { ...newContact, id: nextId },
                            ],
                            nextId: nextId + 1,
                        })
                    }
                />
                <ContactsList
                    contacts={orderedContacts}
                    onDeleteContact={(targetId) => {
                        this.setState({
                            contacts: contacts.filter(({ id }) => {
                                return id !== targetId;
                            }),
                        });
                    }}
                    onToggleFavorite={(targetId) => {
                        this.setState({
                            contacts: contacts.map((contact) =>
                                contact.id === targetId
                                    ? {
                                          ...contact,
                                          isFavorite: !contact.isFavorite,
                                      }
                                    : contact
                            ),
                        });
                    }}
                />
            </>
        );
    }
}
