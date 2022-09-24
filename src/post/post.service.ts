import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: any) {
    const find = await this.repository.findOne(id);

    if (!find) {
      throw new NotFoundException();
    }

    return find;
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.update(id, dto);

    if (!find) {
      throw new NotFoundException();
    }

    return find;
  }

  async remove(id: number) {
    const find = await this.repository.delete(id);

    if (!find) {
      throw new NotFoundException();
    }

    return find;
  }
}
