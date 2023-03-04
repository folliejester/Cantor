//const lyricsFinder = require("lyrics-finder");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("rOq7dk4zFDw2S6ZCTrLzo4LpHRtYpfGPRBmZvr0oRd5KHIJvYPRkUur26fhgZTkg");
SongTitle = "kamaz"
async function lyrr(SongTitle)
{
//let lyrics = await lyricsFinder(SongTitle);
const searches = await Client.songs.search(SongTitle);
const lyrics = await searches[0].lyrics();
if (!lyrics)
      return client.sendTime(
        message.channel,
        `**No lyrics found for -** \`${SongTitle}\``
      );
console.log(searches[0].thumbnail)
      }
      lyrr(SongTitle)