import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './DTO/auth-credentials.dto';
import { User } from './user.entity';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = new User();
    user.username = username;
    user.password = password;
    await user.save();
  }
}
