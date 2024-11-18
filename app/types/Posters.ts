export interface PostersResponse {
    status: string
    data: PostersData[]
  }
  
  export interface PostersData {
    id: number
    caption_ar: string
    caption_en: string
    image: string
    created_at: string
    updated_at: string
    is_active: number
  }
  