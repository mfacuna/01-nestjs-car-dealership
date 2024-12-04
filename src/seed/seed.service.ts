import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { Brand } from 'src/brands/entities/brand.entity';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ){}

  populateDB(){

    this.carsService.fillCarsWhithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWhithSeedData(BRANDS_SEED);

    //CARS_SEED
    //BRANDS_SEED 

    return 'Seed executed successfully'
  }
}