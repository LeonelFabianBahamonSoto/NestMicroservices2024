import { IsString } from "class-validator";

export class CarDto {
    @IsString({ message: 'The brand must be a String' })
    brand: String;

    @IsString({ message: 'The model must be a String' })
    model: String;
}