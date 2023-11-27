import axios, { AxiosResponse } from 'axios';
import { Accessibility, Activity, Price } from './bored-api-client.types';
import 'dotenv/config';

const { BORED_API_HOST } = process.env;

export class BoredApiClientService {
  // Retrieves a random activity from the Bored API
  static async getRandomActivity(): Promise<Activity> {
    const response = await axios.get(`${BORED_API_HOST}/api/activity`);
    return response.data;
  }

  // Maps the accessibility value to the corresponding enum value
  static mapAccessibility(accessibility: number): Accessibility {
    if (accessibility <= 0.25) return Accessibility.High;
    if (accessibility <= 0.75) return Accessibility.Medium;
    return Accessibility.Low;
  }

  // Maps the price value to the corresponding enum value
  static mapPrice(price: number): Price {
    if (price === 0) return Price.Free;
    if (price <= 0.5) return Price.Low;
    return Price.High;
  }
}
