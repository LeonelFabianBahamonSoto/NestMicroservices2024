import { Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './cars.interface';

import { v4 as uuid } from 'uuid';
import { CarDto } from './Dtos/CarDto';

@Injectable()
export class CarsService {
    private cars = [
        { id: uuid(), brand: "Toyota", model: "Corolla" },
        { id: uuid(), brand: "Honda", model: "Civic" },
        { id: uuid(), brand: "Ford", model: "Mustang" },
        { id: uuid(), brand: "Chevrolet", model: "Camaro" },
        { id: uuid(), brand: "BMW", model: "X5" },
        { id: uuid(), brand: "Audi", model: "A4" },
        { id: uuid(), brand: "Mercedes-Benz", model: "C-Class" },
        { id: uuid(), brand: "Volkswagen", model: "Golf" },
        { id: uuid(), brand: "Nissan", model: "Altima" },
        { id: uuid(), brand: "Hyundai", model: "Elantra" }
    ];

    public createNewCar( car: CarDto ) {
        const uniqueId = uuid();
        this.cars.push({ id: uniqueId, brand: car.brand.toString(), model: car.model.toString() });

        return this.findCarById( uniqueId );
    };

    public updateCar( car: Cars ) {
        // this.cars.splice(  );
    };

    public findAll() {
        return this.cars;
    }

    public findCarById( id: string ) {

        const car = this.cars.find( carFound => carFound.id === id );

        if( !car )
            throw new NotFoundException( `No existe el carro consultado con el id:${ id }` );

        return car;
    }

    public deleteCar( id: number ) {
        delete( this.cars[ id ] );
    }
}
