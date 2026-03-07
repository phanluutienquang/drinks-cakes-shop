import { UserRepository } from "./user.repository";

export class UserService{
    constructor(private readonly userRepository: UserRepository) {}

    // async createUser(data: CreateUserDto) {
    //     return await this.userRepository.createUser(data);
    // }
    async findAllUsers() {
        return await this.userRepository.findAllUsers();
    }

    async findUserByEmail(email: string) {
        const user = await this.userRepository.findUserByEmail(email);
        return user;
    }

    async findUserById(id: string) {
        const user = await this.userRepository.findUserById(id);
        return user;
    }

    async updateUser(id: string, data: Partial<{ name?: string; email?: string; password?: string }>) {
        return await this.userRepository.updateUser(id, data);
    }

    async deleteUser(id: string) {
        return await this.userRepository.deleteUser(id);
    }
}