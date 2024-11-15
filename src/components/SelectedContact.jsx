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
      } catch (e) {
        console.log(e);
      }
    }
    fetchContact();
  }, [selectedContactId]);
}
