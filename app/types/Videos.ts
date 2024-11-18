export interface VideosResponse {
  status: string;
  data: Videos[];
}

export interface Videos {
  id: number;
  video_category_id: number;
  video: string;
  title_ar: string;
  title_en: string;
  details_ar: string;
  details_en: string;
  serial_link: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface VideosCatResponse {
  status: string;
  data: VideosCat[];
}

export interface VideosCat {
  id: number;
  name_ar: string;
  name_en: string;
  image: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface VideosBySerialResponse {
  status: string;
  data: VideosBySerialData[];
  category: Category2;
}

export interface VideosBySerialData {
  id: number;
  video_category_id: number;
  video: string;
  title_ar: string;
  title_en: string;
  details_ar: string;
  details_en: string;
  serial_link: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  category: Category;
  image: string;

}

export interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  image: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface Category2 {
  id: number;
  name_ar: string;
  name_en: string;
  image: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface VideoDetailResponse {
  status: string;
  data: VideoDetailData;
}

export interface VideoDetailData {
  id: number;
  video_category_id: number;
  video: string;
  title_ar: string;
  title_en: string;
  details_ar: string;
  details_en: string;
  serial_link: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  image: string;
}
