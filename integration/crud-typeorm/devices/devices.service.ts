import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@mavric/crud-typeorm';

import { Device } from './device.entity';

@Injectable()
export class DevicesService extends TypeOrmCrudService<Device> {
  constructor(@InjectRepository(Device) repo) {
    super(repo);
  }
}
