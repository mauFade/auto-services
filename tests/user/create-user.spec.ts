import { UserRepositoryMock } from "./mocks/user-repository-mock";
import { BCryptMock } from "./mocks/bcrypt-mock";

import { CreateUserUseCase } from "../../src/application/user/usecase/create-user-use-case";
import { describe, expect, test } from "vitest";
import { User } from "../../src/application/user/model/user";

const mockRepo = new UserRepositoryMock();
const bcMock = new BCryptMock();

const uc = CreateUserUseCase.getInstance(mockRepo, bcMock);

test("Create a user sucessfully", () => {
  describe("should create a user", async () => {
    expect(
      uc.execute({
        email: "test@test.com",
        name: "test",
        password: "test",
      })
    ).not.toThrow();
  });

  describe("should return a user", async () => {
    const user = await uc.execute({
      email: "test@test.com",
      name: "test",
      password: "test",
    });

    expect(user).toBeInstanceOf(User);
  });
});
