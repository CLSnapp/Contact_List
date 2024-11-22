import { useEffect, useState } from "react";
import React from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  console.log("SelectedContact > selectedContactId", selectedContactId);

  useEffect(() => {
    //Fetch Data
    async function fetchContact() {
      try {
        //Get Data
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        // console.log("async SelectedContact url:", url);
        console.log("async SelectedContact result:", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  return (
    <>
      <div>
        <p>
          <strong>Contact Name:</strong> {contact ? contact.name : "Loading..."}
        </p>
      </div>
      <div>
        <p>
          <strong>Address: </strong>
          {contact?.address?.city
            ? `${contact.address.street}, ${contact.address.suite}, ${contact.address.city}`
            : "Loading..."}
        </p>
      </div>
      <div>
        <p>
          <strong>Username: </strong>
          {contact ? contact.username : "Loading..."}
        </p>
      </div>
      <div>
        <p>
          <strong>Website: </strong>
          {contact ? contact.website : "Loading..."}
        </p>
      </div>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </>
  );
}
