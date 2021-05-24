// ShoppingItem interface
export interface ShoppingItem {
  id: number;
  shopping_list_id: number;
  category_master_id: number;
  food_master_id: number;
  food_master_name: string;
  quantity: string;
  unit: string;
  status: boolean;
  status_label: string;
  created_at: string;
  updated_at: string;
}