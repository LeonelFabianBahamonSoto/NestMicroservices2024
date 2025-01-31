import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    { id: uuid(), name: "Toyota",        createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Honda",         createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Ford",          createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Chevrolet",     createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "BMW",           createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Audi",          createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Mercedes-Benz", createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Volkswagen",    createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Nissan",        createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  },
    { id: uuid(), name: "Hyundai",       createdAt: new Date().getTime(), updatedAt: new Date().getTime(),  }
  ];

  create(createBrandDto: CreateBrandDto) {

    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    };

    this.brands.push( brand );

    return brand;
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find( brandFound => brand.id === brandFound.id );

    if( !brand )
      throw new NotFoundException( 'No se encontro el Brand asociado al id' );

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne( id );

    this.brands = this.brands.map( brand => {
      if( brand.id === id ) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto  }
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string ) {
    this.brands = this.brands.filter( brand => brand.id !== id );
  }
}
