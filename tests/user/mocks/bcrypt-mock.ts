import { IBCryptRepository } from "../../../src/infra/bcrypt/model/index";

export class BCryptMock implements IBCryptRepository {
  public async compare(payload: string, hashCompare: string): Promise<boolean> {
    return true;
  }

  public async create(payload: string): Promise<string> {
    return payload;
  }
}
