export interface IVideos {
    total:     number;
    totalHits: number;
    hits:      IVideo[];
}

export interface IVideo {
    id:           number;
    pageURL:      string;
    type:         string;
    tags:         string;
    duration:     number;
    picture_id:   string;
    videos:       Videos;
    views:        number;
    downloads:    number;
    likes:        number;
    comments:     number;
    user_id:      number;
    user:         string;
    userImageURL: string;
}

export interface Videos {
    large:  Large;
    medium: Large;
    small:  Large;
    tiny:   Large;
}

export interface Large {
    url:    string;
    width:  number;
    height: number;
    size:   number;
}