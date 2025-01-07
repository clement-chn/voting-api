import { IsBoolean, IsInt } from "class-validator";

export class ChangeCandidate {

    @IsInt()
    userId: number

    @IsBoolean()
    isCandidate: boolean
}