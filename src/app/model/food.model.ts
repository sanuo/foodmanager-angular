// Food interface
export interface Food {
    id: number;
    category_master_id: number;
    category_master_name?: string;
    user_id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }