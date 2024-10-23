import { Cars } from './cars.interface';
import { CarDto } from './Dtos/CarDto';
export declare class CarsService {
    private cars;
    createNewCar(car: CarDto): {
        id: string;
        brand: string;
        model: string;
    };
    updateCar(car: Cars): void;
    findAll(): {
        id: string;
        brand: string;
        model: string;
    }[];
    findCarById(id: string): {
        id: string;
        brand: string;
        model: string;
    };
    deleteCar(id: number): void;
}
