import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService] // Make BrandsService accessible to other modules that import this module.  // This allows BrandsService to be used in other modules.  // Without this, BrandsService would be private to this module.  // This makes it possible for other modules to inject BrandsService into their controllers.  // This is essential for dependency injection in NestJS.  // In this case, BrandsService is used in BrandsController.  //
})
export class BrandsModule {}
