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
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
