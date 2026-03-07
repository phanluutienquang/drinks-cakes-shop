import prisma from "@/infra/database/database.config";

export class UserRepository {
  async createUser(data: { name: string; email: string; password: string }) {
    // const hashpassword = await bcrypt.hash(data.password, 10);
    return await prisma.user.create({
      data: {
        ...data,
      },
    });       
  }

  async findAllUsers() {
    return await prisma.user.findMany();
  }

  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: string | undefined) {
    return await prisma.user.findUnique({ 
     where: { id },
     select: {
      id: true,
      name: true,
      email: true,
     },
     });
  }

  async updateUser(id: string, 
    data : Partial<{ name?: string; email?: string; password?: string }>) {
    return await prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({ where: { id } });
  }
}