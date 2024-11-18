export interface ArticlesCatResponse {
  status: string;
  data: AreticlesCatData[];
}

export interface AreticlesCatData {
  id: number;
  name_ar: string;
  name_en: string;
  detail_ar: string;
  detail_en: string;
  background_color: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  article_display_type_id?: number;
  display_type?: DisplayType;
}

export interface DisplayType {
  id: number;
  name_ar: string;
  name_en: string;
  created_at: string;
  updated_at: string;
}

export interface ArticlesCatBySerialResponse {
  status: string;
  data: ArticlesCatBySerialData[];
  category: Category2;
}

export interface ArticlesCatBySerialData {
  id: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  content_ar: string;
  content_en: string;
  is_sound: number;
  sound: string;
  sound_en?: string;
  serial_link: string;
  article_category_id: number;
  author_id: number;
  created_at: string;
  updated_at: string;
  image: string;
  is_published: string;
  category: Category;
  author: Author;
}

export interface Author {
  id: number;
  name_ar: string;
  name_en: string;
  email: string;
  phone: string;
  profile_pic: string;
  serial_link: string;
  bio_ar: string;
  bio_en: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  detail_ar: string;
  detail_en: string;
  background_color: string;
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
  detail_ar: string;
  detail_en: string;
  background_color: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface ArticlesDetailResponse {
  status: string;
  data: ArticlesDetailsData;
  category: Category2;
}

export interface ArticlesDetailsData {
  id: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  content_ar: string;
  content_en: string;
  is_sound: number;
  sound: any;
  sound_en?: string;
  serial_link: string;
  article_category_id: number;
  author_id: number;
  created_at: string;
  updated_at: string;
  image: string;
  is_published: string;
  category: Category;
  author: Author;
}

export interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  detail_ar: string;
  detail_en: string;
  background_color: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface Author {
  id: number;
  name_ar: string;
  name_en: string;
  email: string;
  phone: string;
  profile_pic: string;
  serial_link: string;
  bio_ar: string;
  bio_en: string;
  created_at: string;
  updated_at: string;
}

export interface Category2 {
  id: number;
  name_ar: string;
  name_en: string;
  detail_ar: string;
  detail_en: string;
  background_color: string;
  serial_link: string;
  period_id: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}
