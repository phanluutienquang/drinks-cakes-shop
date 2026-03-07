import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: "Name must be a string" })  
  name?: string;

  @IsOptional()
  @IsString({ message: "Email must be a string" })
  email?: string;   

  @IsOptional()
  @IsString({ message: "Password must be a string" })
  password?: string;
}