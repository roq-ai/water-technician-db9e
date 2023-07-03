import axios from 'axios';
import queryString from 'query-string';
import { QuoteInterface, QuoteGetQueryInterface } from 'interfaces/quote';
import { GetQueryInterface } from '../../interfaces';

export const getQuotes = async (query?: QuoteGetQueryInterface) => {
  const response = await axios.get(`/api/quotes${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createQuote = async (quote: QuoteInterface) => {
  const response = await axios.post('/api/quotes', quote);
  return response.data;
};

export const updateQuoteById = async (id: string, quote: QuoteInterface) => {
  const response = await axios.put(`/api/quotes/${id}`, quote);
  return response.data;
};

export const getQuoteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/quotes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteQuoteById = async (id: string) => {
  const response = await axios.delete(`/api/quotes/${id}`);
  return response.data;
};
