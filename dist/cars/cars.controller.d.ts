import { CarsService } from './cars.service';
import { Cars } from './cars.interface';
import { CarDto } from './Dtos/CarDto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    createACar(carDto: CarDto): {
        id: string;
        brand: string;
        model: string;
    };
    updateACar(car: Cars): void;
    getAllCars(): {
        id: string;
        brand: string;
        model: string;
    }[];
    getCarById(id: string): {
        id: string;
        brand: string;
        model: string;
    };
    deleteACar(id: number): void;
}
