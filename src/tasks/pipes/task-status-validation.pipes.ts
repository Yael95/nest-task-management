import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../tasks-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        `Status : ${value} is invalid, try status: OPEN, IN_PROGRESS, DONE`,
      );
    }
    return value;
  }
  private isStatusValid(status: any): boolean {
    return this.allowedStatuses.indexOf(status) !== -1;
  }
}
