import React, { useState } from "react";
import Airtable from "airtable";

console.log("RSVP FORM:::", process.env)

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appwdpz8rqxw74Oxy"
);

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const saveRsvp = () => {
    base("Table 1").create(
      [
        {
          fields: {
            name,
            email,
            numGuests,
            message,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
    setSubmitted(true);
  };

  return (
    <div className="h-full">
      {submitted && (
        <div className="flex flex-col content-center justify-center">
          <p className="text-2xl pb-5 text-center">Thanks for RSVPing!</p>
          <p className="text-xl text-center">Can't wait to see you and have you with us to celebrate! 🎓</p>
        </div>
      )}
      {!submitted && (
        <form onSubmit={saveRsvp}>
          <h3>RSVP Info</h3>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabIndex="1"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabIndex="2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Number of guests"
              type="text"
              tabIndex="3"
              required
              value={numGuests}
              onChange={(e) => setNumGuests(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Any message for the grad"
              tabIndex="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white hover:text-gold font-bold py-3 px-8 rounded"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default RsvpForm;
