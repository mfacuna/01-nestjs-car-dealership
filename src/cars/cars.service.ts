import { CreateCarDto } from './dto/create-car.dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto } from './dto';

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

    update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findOneById(id)

        if( updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`Car id ${id} is not valid inside body, already exists in database`)

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB
            }
            return car
        })

        return carDB; //car actually updates
    }

    delete(id: string){

        this.findOneById(id)
        this.cars = this.cars.filter( car => car.id !== id)        

        return {
            message: `The item "${id}" has been deleted.`
        }
    }
}
