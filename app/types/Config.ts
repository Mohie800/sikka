export interface ConfigResponse {
    status: string
    data: ConfigData[]
  }
  
  export interface ConfigData {
    id: number
    name: string
    value: string
    created_at: string
    updated_at: string
  }
  