import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QuoteInterface {
  id?: string;
  questionnaire: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface QuoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  questionnaire?: string;
  user_id?: string;
}
