const createURL = (path) => {
  return window.location.origin + path;
};

export const addUserArtist = async (artist) => {
  const res = await fetch(
    new Request(createURL("/api/artist"), {
      method: "PATCH",
      body: JSON.stringify({ artist }),
    }),
    { cache: "no-store" },
    { next: { tags: ["userArtists"] } }
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const deleteUserArtist = async (artist) => {
  const res = await fetch(
    new Request(createURL("/api/artist"), {
      method: "DELETE",
      body: JSON.stringify({ artist }),
    }),
    { cache: "no-store" },
    { next: { tags: ["userArtistsRemove"] } }
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const addUserShow = async (event) => {
  const res = await fetch(
    new Request(createURL("/api/shows"), {
      method: "PATCH",
      body: JSON.stringify({ event }),
    }),
    { cache: "no-store" },
    { next: { tags: ["userShows"] } }
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const deleteUserShow = async (event) => {
  const res = await fetch(
    new Request(createURL("/api/shows"), {
      method: "DELETE",
      body: JSON.stringify({ event }),
    }),
    { cache: "no-store" },
    { next: { tags: ["userShowsRemove"] } }
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const getUserShowsAPI = async ({ userId }) => {
  const res = await fetch(
    new Request(createURL("/api/shows"), {
      method: "PUT",
      body: JSON.stringify({ userId }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
