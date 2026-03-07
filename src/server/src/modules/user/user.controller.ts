import asyncHandler from "@/shared/utils/asyncHandler";
import { UserService } from "./user.service";
import { Request, Response } from "express";
import sendResponse from "@/shared/utils/sendResponse";

export class UserController {
    constructor(private userService: UserService) {}

    findAllUsers = asyncHandler(
    async (_req: Request, res: Response): Promise<void> => {
      const users = await this.userService.findAllUsers();
      sendResponse(res, 200, {
        data: { users },
        message: "Users fetched successfully",
      });
    }
  );

    findUserByEmail = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { email } = req.params;
      const user = await this.userService.findUserByEmail(email as string);
      if (!user) {
        sendResponse(res, 404, {
          message: "User not found",
        });
        return;
      }
      sendResponse(res, 200, {
        data: { user },
        message: "User fetched successfully",
      });
    }
  );

    findUserById = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      const user = await this.userService.findUserById(id as string);
      if (!user) {
        sendResponse(res, 404, {
          message: "User not found",
        });
        return;
      }
      sendResponse(res, 200, {
        data: { user },
        message: "User fetched successfully",
      });
    }
  );
  
  updateUser = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      const data = req.body;
      const updatedUser = await this.userService.updateUser(id as string, data);
      sendResponse(res, 200, {
        data: { user: updatedUser },
        message: "User updated successfully",
      });
    }
  );

  deleteUser = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      await this.userService.deleteUser(id as string);
      sendResponse(res, 200, {
        message: "User deleted successfully",
      });
    }
  );
  
  
} 