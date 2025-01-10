import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('forecast')
  async getWeather(@Query('city') city: string): Promise<any> {
    if (!city) {
      return { message: 'City is required' };
    }
    return this.weatherService.getWeeklyForecast(city);
  }
}
