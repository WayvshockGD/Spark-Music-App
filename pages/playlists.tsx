import { Component } from "react";
import { SoundcloudPlaylistSearchV2 } from "soundcloud.ts";
import LayoutBuilder from "./components/LayoutBuilder";

interface PlaylistData {
    title: string;
    description: string | null;
    icon: string | null;
    redirect_uri: string;
    id: number;
}

export default class Playlist extends Component<{ json: PlaylistData[] }> {
    public constructor(props: any) {
        super(props);
    }

    static async getInitialProps() {
        let dataArr: PlaylistData[] = [];
        let res = await fetch(`${process.env.API_URL}/playlists/?search=random`);
        let json = await res.json() as SoundcloudPlaylistSearchV2;

        json.collection = json.collection.slice(0, json.collection.length);

        for (let data of json.collection) {
            dataArr.push({ 
                title: data.title, 
                description: data.description,
                icon: data.artwork_url,
                redirect_uri: data.uri,
                id: data.id
            })
        }

        return { json: dataArr };
    }

    render() {
        return (
            <LayoutBuilder title="Playlist">
                <div className="flex min-h-screen flex-col items-center justify-center py-2">
                    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                        {this.props.json.map(v => {
                            return (
                                <a
                                    href={v.redirect_uri}
                                    className="mt-6 w-96 border p-10 hover:text-blue-600 focus:text-blue-600"
                                    id="playlist-tile"
                                >
                                    <p className="mt-4 text-xl text-bold">
                                        {v.title}
                                    </p>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </LayoutBuilder>
        )
    }
}