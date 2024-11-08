import { Video } from "../data/videos";

interface Props {
    video: Video;
}

export function VideoCard({ video }: Props) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <video
                className="w-full aspect-video rounded"
                controls
                preload="none"
                poster={`/thumbnails/${video.filename.replace(".mp4", ".jpg")}`}
            >
                <source src={`/videos/${video.filename}`} type="video/mp4" />
            </video>
            <h3 className="mt-2 font-bold">{video.title}</h3>
            <div className="flex gap-2 mt-1">
                {video.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
