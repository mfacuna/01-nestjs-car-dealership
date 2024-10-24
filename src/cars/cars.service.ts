import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Mustang',
        },
        {
            id: 4,
            brand: 'BMW',
            model: 'X5',
        },
        {
            id: 5,
            brand: 'Mercedes-Benz',
            model: 'E-Class',
        },
        {
            id: 6,
            brand: 'Jeep',
            model: 'Wrangler',
        }
    ]

    findAll() {
        return this.cars
    }

    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`)
        return car
    }
}