export interface IGifs {
  data?: (DataEntity)[] | null;
  pagination: Pagination;
  meta: Meta;
}

export interface DataEntity {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Images {
  original: Original;
  downsized: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  downsized_large: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  downsized_medium: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  downsized_small: DownsizedSmallOrOriginalMp4OrPreview;
  downsized_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  fixed_height: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
  fixed_height_downsampled: FixedHeightDownsampledOrFixedWidthDownsampled;
  fixed_height_small: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
  fixed_height_small_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  fixed_height_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  fixed_width: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
  fixed_width_downsampled: FixedHeightDownsampledOrFixedWidthDownsampled;
  fixed_width_small: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
  fixed_width_small_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  fixed_width_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  looping: Looping;
  original_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  original_mp4: DownsizedSmallOrOriginalMp4OrPreview;
  preview: DownsizedSmallOrOriginalMp4OrPreview;
  preview_gif: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
  preview_webp: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
}

export interface Original {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedSmallOrOriginalMp4OrPreview {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface FixedHeightDownsampledOrFixedWidthDownsampled {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}

export interface Analytics {
  onload: OnloadOrOnclickOrOnsent;
  onclick: OnloadOrOnclickOrOnsent;
  onsent: OnloadOrOnclickOrOnsent;
}

export interface OnloadOrOnclickOrOnsent {
  url: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface IGifsShort {
  id: string;
  url: string;
}

// GIFS ID
export interface IGifsId {
  data: Data;
  meta: {
    msg: string;
    status: number;
    response_id: string;
  }
}

export interface Data {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: ImagesId;
  user: User;
  analytics: Analytics;
  analytics_response_payload: string;
}

export interface ImagesId {
  hd: HdOrPreviewOrOriginalMp4OrDownsizedSmall;
  fixed_width_still: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  fixed_height_downsampled: FixedHeightDownsampledOrFixedWidthDownsampled;
  preview_gif: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  preview: HdOrPreviewOrOriginalMp4OrDownsizedSmall;
  fixed_height_small: FixedHeightSmallOrFixedWidthOrFixedWidthSmallOrFixedHeight;
  downsized: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  fixed_width_downsampled: FixedHeightDownsampledOrFixedWidthDownsampled;
  fixed_width: FixedHeightSmallOrFixedWidthOrFixedWidthSmallOrFixedHeight;
  downsized_still: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  downsized_medium: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  original_mp4: HdOrPreviewOrOriginalMp4OrDownsizedSmall;
  downsized_large: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  preview_webp: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  original: Original;
  original_still: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  fixed_height_small_still: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  fixed_width_small: FixedHeightSmallOrFixedWidthOrFixedWidthSmallOrFixedHeight;
  looping: Looping;
  downsized_small: HdOrPreviewOrOriginalMp4OrDownsizedSmall;
  fixed_width_small_still: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  fixed_height_still: FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill;
  fixed_height: FixedHeightSmallOrFixedWidthOrFixedWidthSmallOrFixedHeight;
}

export interface HdOrPreviewOrOriginalMp4OrDownsizedSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface FixedWidthStillOrPreviewGifOrDownsizedOrDownsizedStillOrDownsizedMediumOrDownsizedLargeOrPreviewWebpOrOriginalStillOrFixedHeightSmallStillOrFixedWidthSmallStillOrFixedHeightStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface FixedHeightDownsampledOrFixedWidthDownsampled {
  height: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface FixedHeightSmallOrFixedWidthOrFixedWidthSmallOrFixedHeight {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Original {
  frames: string;
  hash: string;
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: boolean;
  website_url: string;
  instagram_url: string;
}
export interface Analytics {
  onload: OnloadOrOnclickOrOnsentOrOnstart;
  onclick: OnloadOrOnclickOrOnsentOrOnstart;
  onsent: OnloadOrOnclickOrOnsentOrOnstart;
  onstart: OnloadOrOnclickOrOnsentOrOnstart;
}
export interface OnloadOrOnclickOrOnsentOrOnstart {
  url: string;
}

  