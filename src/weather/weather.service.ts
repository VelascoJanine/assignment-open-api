import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiKey: string = 'af3fb672d892d8263c9e0ede0cbe2758'; // Replace with your OpenWeatherMap API key

  constructor(private readonly httpService: HttpService) {}

  async getWeeklyForecast(city: string): Promise<any> {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${this.apiKey}`;
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch weather data', HttpStatus.BAD_REQUEST);
    }
  }
}