"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const CarDto_1 = require("./Dtos/CarDto");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    ;
    createACar(carDto) {
        return this.carsService.createNewCar(carDto);
    }
    ;
    updateACar(car) {
        return this.carsService.updateCar(car);
    }
    ;
    getAllCars() {
        return this.carsService.findAll();
    }
    getCarById(id) {
        return this.carsService.findCarById(id);
    }
    deleteACar(id) {
    }
    ;
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.Post)('createCar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CarDto_1.CarDto]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "createACar", null);
__decorate([
    (0, common_1.Patch)('updateCar/:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "updateACar", null);
__decorate([
    (0, common_1.Get)('/AllCars'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getAllCars", null);
__decorate([
    (0, common_1.Get)('/carId/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getCarById", null);
__decorate([
    (0, common_1.Delete)('updateCar/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "deleteACar", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
//# sourceMappingURL=cars.controller.js.map