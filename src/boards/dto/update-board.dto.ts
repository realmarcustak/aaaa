import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BoardStatus } from '../board-status.enum';

export class UpdateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNotEmpty()
  @IsIn([BoardStatus.PUBLIC, BoardStatus.PRIVATE])
  status: BoardStatus;
}
