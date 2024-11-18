export interface GalleryCatResponse {
    status: string
    data: GalleryCatData[]
  }
  
  export interface GalleryCatData {
    id: number
    name_ar: string
    name_en: string
    subtitle_ar: string
    subtitle_en: string
    image: string
    serial_link: string
    period_id: number
    is_active: number
    created_at: string
    updated_at: string
  }

  export interface GalleryByIdResponse {
    status: string
    data: GalleryByIdData[]
    category: Category
  }
  
  export interface GalleryByIdData {
    id: number
    gallery_category_id: number
    image: string
    caption_ar: string
    caption_en: string
    serial_link: string
    is_active: number
    created_at: string
    updated_at: string
    gallery_category: GalleryCategory
  }
  
  export interface GalleryCategory {
    id: number
    name_ar: string
    name_en: string
    subtitle_ar: string
    subtitle_en: string
    image: string
    serial_link: string
    period_id: number
    is_active: number
    created_at: string
    updated_at: string
  }
  
  export interface Category {
    id: number
    name_ar: string
    name_en: string
    subtitle_ar: string
    subtitle_en: string
    image: string
    serial_link: string
    period_id: number
    is_active: number
    created_at: string
    updated_at: string
  }
  