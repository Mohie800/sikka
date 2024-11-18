export interface PodcastCatResponse {
  status: string;
  data: PodcastCatData[];
}

export interface PodcastCatData {
  id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

// podcast shows
export interface PodcastShowResponse {
  status: string;
  data: PodcastShowData[];
}

export interface PodcastShowData {
  id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  is_featured: string;
  serial_link: string;
  period_id: number;
  podcast_category_id: number;
  created_at: string;
  updated_at: string;
  podcasts: PodcastShow[];
}

export interface PodcastShow {
  id: number;
  podcast_category_id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  is_show: number;
  podcast_show_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  sound: string;
  sound_en?: string
  serial_link: string;
}

// latest podcasts

export interface PodcastEpisodesResponse {
  status: string
  latest_podcast: LatestPodcast
  latest_podcasts: LatestPodcast2[]
}

export interface LatestPodcast {
  id: number
  podcast_category_id: number
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  image: string
  is_show: number
  podcast_show_id: any
  is_active: number
  created_at: string
  updated_at: string
  sound: string
  sound_en?: string
  serial_link: string
  category: Category
}

export interface Category {
  id: number
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  image: string
  serial_link: string
  period_id: number
  is_active: number
  created_at: string
  updated_at: string
}

export interface LatestPodcast2 {
  id: number
  podcast_category_id: number
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  image: string
  is_show: number
  podcast_show_id: any
  is_active: number
  created_at: string
  updated_at: string
  sound: string
  sound_en?: string
  serial_link: string
  category: Category2
}

export interface Category2 {
  id: number
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  image: string
  serial_link: string
  period_id: number
  is_active: number
  created_at: string
  updated_at: string
}

// category episodes
export interface PodcastCategoryEpisodesResponse {
  status: string
  data: PodcastCategoryEpisodesData[]
  category: Category2
}

export interface PodcastCategoryEpisodesData {
  id: number
  podcast_category_id: number
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  image: string
  is_show: number
  podcast_show_id?: number
  is_active: number
  created_at: string
  updated_at: string
  sound: string
  sound_en?: string
  serial_link: string
  category: Category
}

export interface Category {
  id: number
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  image: string
  serial_link: string
  period_id: number
  is_active: number
  created_at: string
  updated_at: string
}

export interface Category2 {
  id: number
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  image: string
  serial_link: string
  period_id: number
  is_active: number
  created_at: string
  updated_at: string
}


// get show details
export interface PodcastShowDetailsResponse {
  status: string
  data: PodcastShowDetailsData
}

export interface PodcastShowDetailsData {
  id: number
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  image: string
  is_featured: string
  serial_link: string
  period_id: number
  podcast_category_id: number
  created_at: string
  updated_at: string
  podcasts: Podcast[]
}

export interface Podcast {
  id: number
  podcast_category_id: number
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  image: string
  is_show: number
  podcast_show_id: number
  is_active: number
  created_at: string
  updated_at: string
  sound: string
  sound_en?: string
  serial_link: string
}

// get episode details

export interface PodcastEpisodeDetailResponse {
  status: string
  data: PodcastEpisodeDetailData
  relatedPodcasts: RelatedPodcast[]
}

export interface PodcastEpisodeDetailData {
  id: number
  podcast_category_id: number
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  image: string
  is_show: number
  podcast_show_id: any
  is_active: number
  created_at: string
  updated_at: string
  sound: string
  sound_en?: string
  serial_link: string
  category: Category
}

export interface Category {
  id: number
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  image: string
  serial_link: string
  period_id: number
  is_active: number
  created_at: string
  updated_at: string
}

export interface RelatedPodcast {
  id: number
  podcast_category_id: number
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  image: string
  is_show: number
  podcast_show_id: any
  is_active: number
  created_at: string
  updated_at: string
  sound: string
  sound_en?: string
  serial_link: string
}



