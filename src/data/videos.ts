export interface Video {
    id: number;
    title: string;
    filename: string;
    tags: string[];
  }

  export const videos: Video[] = [
    {
      id: 1,
      title: "Fun Animation",
      filename: "animation1.mp4",
      tags: ["animation", "fun"]
    },
    // Add more videos here
  ];
