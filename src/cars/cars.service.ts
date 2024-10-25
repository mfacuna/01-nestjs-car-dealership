import { CreateCarDto } from './dto/create-car.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {



    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Mustang',
        },
        {
            id: uuid(),
            brand: 'BMW',
            model: 'X5',
        },
        {
            id: uuid(),
            brand: 'Mercedes-Benz',
            model: 'E-Class',
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Wrangler',
        }
    ]

    findAll() {
        return this.cars
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`)
        return car
    }

    create( createCarDto: CreateCarDto){
        const car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car)
        return car
    }
}
