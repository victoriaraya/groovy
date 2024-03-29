import db from "./db";

export async function getArtistInfo(id) {
  const artist = await db.artist.findUnique({
    where: { id },
  });
  return artist;
}

export async function getArtistsInfo([...ids]) {
  let artists = [];
  for (let id of ids) {
    const artist = await db.artist.findUnique({
      where: { id },
    });
    artists.push(artist);
  }
  return artists;
} //
