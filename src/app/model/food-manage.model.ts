// FoodManage interface
export interface FoodManage {
  id: number;
  category_master_id: number;
  food_master_id: number;
  food_master_name?: string;
  user_id: number;
  quantity: number;
  unit: string;
  expiration_date: Date;
  created_at: string;
  updated_at: string;
}