"use client";

import { useState } from "react";
import AddToMyShows from "./AddToMyShows";

const FindShows = ({ artist, userId }) => {
  const [location, setlocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noShows, setNoShows] = useState(false);
  const [searchResultsAll, setSearchResultsAll] = useState([]);
  const [noShowsMessage, setNoShowsMessage] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const findShow = async (location) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.NEXT_PUBLIC_TICKETMASTER_API}&attractionId=${artist.attractionId}&locale=*&stateCode=${location}`,
        { method: "GET" }
      );
      const data = await response.json();
      const events = data._embedded.events;
      let eventList = [];
      for (let event of events) {
        const substr = event.name.split(" ")[0];
        if (!eventList.some((item) => item.name.includes(substr))) {
          eventList.push({
            name: event.name,
            city: event._embedded.venues[0].city.name,
            state: event._embedded.venues[0].state.name,
            url: event.url,
            artistId: artist.id, //
            imageUrl: event.images[0].url,
          });
        }
      }
      setSearchResults(eventList);
    } catch (e) {
      if (e.name == "TypeError") {
        setNoShows(true);
      } else {
        console.error("Error during search:", e);
      }
    }
  };

  const findAllShows = async () => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.NEXT_PUBLIC_TICKETMASTER_API}&attractionId=${artist.attractionId}&locale=*`,
        { method: "GET" }
      );
      const data = await response.json();
      const events = data._embedded.events;
      let eventList = [];
      for (let event of events) {
        const substr = event.name.split(" ")[0];
        if (!eventList.some((item) => item.name.includes(substr))) {
          let eventInfo = {};
          eventInfo.name = `${event.name}`;
          eventInfo.city = `${event._embedded.venues[0].city.name}`;
          event._embedded.venues[0].country.countryCode == "US"
            ? (eventInfo.state = `${event._embedded.venues[0].state.name}`)
            : (eventInfo.country = `${event._embedded.venues[0].country.name}`);
          eventInfo.url = `${event.url}`;
          eventInfo.artistId = `${artist.id}`; //
          eventInfo.imageUrl = `${event.images[0].url}`;
          eventList.push(eventInfo);
        }
      }
      setSearchResultsAll(eventList);
    } catch (e) {
      if (e.name == "TypeError") {
        setNoShowsMessage(true);
      } else {
        console.error("Error during search:", e);
      }
    }
  };

  return (
    <div>
      <p className="text-xl pb-1">{`Find ${artist.name} shows near you `}</p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          findShow(location);
          setSearchResults([]);
          setSearchResultsAll([]);
          setNoShows(false);
          setNoShowsMessage(false);
        }}
        className="p-1"
      >
        <label htmlFor="state">Choose your state: </label>
        <select
          id="state"
          onChange={(e) => {
            setlocation(e.target.value);
          }}
          className="text-black cursor-pointer p-1 rounded-sm mx-0.5"
        >
          <option>AL</option>
          <option>AK</option>
          <option>AZ</option>
          <option>AR</option>
          <option>CA</option>
          <option>CO</option>
          <option>CT</option>
          <option>DE</option>
          <option>FL</option>
          <option>GA</option>
          <option>HI</option>
          <option>ID</option>
          <option>IL</option>
          <option>IN</option>
          <option>IA</option>
          <option>KS</option>
          <option>KY</option>
          <option>LA</option>
          <option>ME</option>
          <option>MD</option>
          <option>MA</option>
          <option>MI</option>
          <option>MN</option>
          <option>MS</option>
          <option>MO</option>
          <option>MT</option>
          <option>NE</option>
          <option>NV</option>
          <option>NH</option>
          <option>NJ</option>
          <option>NM</option>
          <option>NY</option>
          <option>NC</option>
          <option>ND</option>
          <option>OH</option>
          <option>OK</option>
          <option>OR</option>
          <option>PA</option>
          <option>RI</option>
          <option>SC</option>
          <option>SD</option>
          <option>TN</option>
          <option>TX</option>
          <option>UT</option>
          <option>VT</option>
          <option>VA</option>
          <option>WA</option>
          <option>WV</option>
          <option>WI</option>
          <option>WY</option>
          <option>DC</option>
        </select>
        <button className="rounded-sm mx-2 text-black bg-gray-300 hover:bg-gray-400 active:bg-gray-500 pb-[1px] pt-[3px] px-2">
          Go!
        </button>
      </form>
      {searchResults.length
        ? searchResults.map((event, index) => (
            <div
              key={index}
              className="rounded-sm mx-2 text-black bg-gray-100 p-3 my-3 text-center text-lg"
            >
              <p className="p-1">{event.name}</p>
              <p className="pb-2">
                {event.city}, {event.state}
              </p>
              <a
                href={`${event.url}`}
                className="rounded-sm mx-2 text-black bg-gray-300 hover:bg-gray-400 active:bg-gray-500 border-solid border-slate-800 border-2 p-1.5 my-3"
              >
                Click here for tickets
              </a>
              <button>+</button>
            </div>
          ))
        : null}
      {noShows ? (
        <div className="py-3 text-center">
          <p className="text-lg p-1">{`Sorry, there are no ${artist.name} shows in your area 🙁`}</p>
          <button
            onClick={() => {
              setNoShows(false);
              findAllShows();
            }}
            className="rounded-sm my-2 mt-3 text-black bg-gray-300 hover:bg-gray-400 active:bg-gray-500 p-1.5 pt-2"
          >
            Click here to expand your search
          </button>
        </div>
      ) : null}
      {searchResultsAll.length
        ? searchResultsAll.map((event, index) => (
            <div
              key={index}
              className="rounded-sm mx-2 text-black bg-gray-100 p-3 my-3 text-center text-lg"
            >
              <AddToMyShows event={event} userId={userId} />
              {/* add this feature to search results */}
              {/* <div className="flex justify-end">
                <button
                  className="rounded-sm px-2 h-8 -mr-3 -mb-3 -mt-5 pt-1.5 group"
                  onClick={() => addToMyShows(event)}
                >
                  <span className="text-2xl group-hover:hidden">+</span>
                  <span className="hidden px-1 group-hover:z-40 relative rounded-sm mt-1 group-hover:visible group-hover:flex group-hover:bg-gray-400 group-hover:border-solid group-hover:border-slate-800 group-hover:border-2 group-hover:-mr-1.5 text-black group-active:bg-gray-500">
                    Add to my shows
                  </span>
                </button>
              </div> */}

              <p className="p-1 mt-1 mx-2 z-10">{event.name}</p>
              <p className="pb-2">
                {event.city}, {event.state ? event.state : event.country}
              </p>
              <div className="mb-2">
                <a
                  href={`${event.url}`}
                  className="rounded-sm mx-2 text-black bg-gray-300 hover:bg-gray-400 active:bg-gray-500 border-solid border-slate-800 border-2 p-1.5 my-3"
                >
                  Click here for tickets
                </a>
              </div>
            </div>
          ))
        : null}
      {noShowsMessage ? (
        <div className="text-lg p-1 py-3 text-center">{`Sorry, looks like ${artist.name} doesn't have any upcoming shows 😪`}</div>
      ) : null}
    </div>
  );
};

export default FindShows;
