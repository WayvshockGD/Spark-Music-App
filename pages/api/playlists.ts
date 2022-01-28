import { NextApiRequest, NextApiResponse } from "next";
import Soundcloud, { SoundcloudPlaylistV2 } from "soundcloud.ts";
import type { SoundcloudPlaylistSearchV2 } from "soundcloud.ts";

export default async function(req: NextApiRequest, res: NextApiResponse<SoundcloudPlaylistSearchV2 | void>) {
    if (req.method === "GET") {
        let randomPlaylists = ["trap", "dubstep", "drum_n_bass", "ambient"];
        let playlists: SoundcloudPlaylistSearchV2 | void;

        let soundcloud = new Soundcloud();
        let q = Array.isArray(req.query.search) ? req.query.search[0] : req.query.search;

        if (q === "random") {
            let rPlaylist = randomPlaylists[Math.floor(Math.random() * randomPlaylists.length)];
            playlists = await soundcloud.playlists.searchV2({ q: rPlaylist }).catch(console.error);
        } else {
            playlists = await soundcloud.playlists.searchV2({ q }).catch(console.error);
        }

        res.status(200).send(playlists);
    }
}