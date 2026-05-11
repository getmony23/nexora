export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'admin' | 'seller'
          created_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'admin' | 'seller'
          created_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'admin' | 'seller'
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          seller_id: string
          title: string
          slug: string
          description: string | null
          features: Json
          price: number
          old_price: number | null
          discount: number | null
          category_id: number | null
          tags: string[] | null
          thumbnail_url: string | null
          images_urls: string[] | null
          preview_video_url: string | null
          demo_url: string | null
          zip_file_url: string | null
          sales_count: number
          views_count: number
          rating: number
          created_at: string
        }
        // ... (Insert and Update types follow similar patterns)
      }
      // ... Add other tables as needed
    }
  }
}
