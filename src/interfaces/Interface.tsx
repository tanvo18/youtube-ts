export interface IVideoItem {
  id: string;
  snippet: {
    title: string,
    thumbnails: {
      medium: {
        url: string
      }
    },
    channelTitle: string,
    publishedAt: string
  },
  statistics: {
    viewCount: string
    likeCount: string,
    dislikeCount: string,
  }
}
