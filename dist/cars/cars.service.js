"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CarsService = class CarsService {
    constructor() {
        this.cars = [
            { id: (0, uuid_1.v4)(), brand: "Toyota", model: "Corolla" },
            { id: (0, uuid_1.v4)(), brand: "Honda", model: "Civic" },
            { id: (0, uuid_1.v4)(), brand: "Ford", model: "Mustang" },
            { id: (0, uuid_1.v4)(), brand: "Chevrolet", model: "Camaro" },
            { id: (0, uuid_1.v4)(), brand: "BMW", model: "X5" },
            { id: (0, uuid_1.v4)(), brand: "Audi", model: "A4" },
            { id: (0, uuid_1.v4)(), brand: "Mercedes-Benz", model: "C-Class" },
            { id: (0, uuid_1.v4)(), brand: "Volkswagen", model: "Golf" },
            { id: (0, uuid_1.v4)(), brand: "Nissan", model: "Altima" },
            { id: (0, uuid_1.v4)(), brand: "Hyundai", model: "Elantra" }
        ];
    }
    createNewCar(car) {
        const uniqueId = (0, uuid_1.v4)();
        this.cars.push({ id: uniqueId, brand: car.brand.toString(), model: car.model.toString() });
        return this.findCarById(uniqueId);
    }
    ;
    updateCar(car) {
    }
    ;
    findAll() {
        return this.cars;
    }
    findCarById(id) {
        const car = this.cars.find(carFound => carFound.id === id);
        if (!car)
            throw new common_1.NotFoundException(`No existe el carro consultado con el id:${id}`);
        return car;
    }
    deleteCar(id) {
        delete (this.cars[id]);
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)()
], CarsService);
//# sourceMappingURL=cars.service.js.map