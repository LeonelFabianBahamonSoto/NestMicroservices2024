import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from './cars.interface';
import { CarDto } from './Dtos/CarDto';

@Controller('cars')
@UsePipes( ValidationPipe )
export class CarsController {

    constructor(
        private readonly carsService: CarsService,
    ) {};

    @Post('createCar')
    createACar( @Body() carDto: CarDto ) {
        return this.carsService.createNewCar( carDto );
    };

    @Patch('updateCar/:id')
    updateACar(
        // @Param( 'id', ParseIntPipe ) id: number,
        @Body() car: Cars
    ) {
        return this.carsService.updateCar( car );
    };

    @Get('/AllCars')
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get('/carId/:id')
    getCarById( @Param( 'id', new ParseUUIDPipe() ) id: string ) {
        return this.carsService.findCarById( id );
    }

    @Delete('updateCar/:id')
    deleteACar( @Param( 'id', ParseIntPipe ) id: number ) {
        
    };
}
