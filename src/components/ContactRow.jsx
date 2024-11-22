import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td className = "name">{contact.name}</td>
      <td className = "email">{contact.email}</td>
      <td className = "phone">{contact.phone}</td>
    </tr>
  );
}
