import { describe, expect, test } from "vitest";
import { ServiceRepositoryMock } from "./mocks/service-repository-mock";
import { VehicleRepositoryMock } from "../vehicle/mocks/vehicle-repository-mock";
import { CreateServiceUseCase } from "../../src/application/service/usecase/create-service-use-case";

const mockRepo = new ServiceRepositoryMock();
const vehicleRepoMock = new VehicleRepositoryMock();

const uc = CreateServiceUseCase.getInstance(mockRepo, vehicleRepoMock);

test("Create a service sucessfully", () => {
  describe("should create a service sucessfully", async () => {
    expect(
      uc.execute({
        date: new Date(),
        description: "test",
        status: "test",
        userId: "test",
        value: 10,
        vehicleId: "123",
      })
    ).not.toThrow();
  });

  describe("should throw error when vehicle is not found", async () => {
    expect(
      uc.execute({
        date: new Date(),
        description: "test",
        status: "test",
        userId: "test",
        value: 10,
        vehicleId: "1234",
      })
    ).toThrow();
  });
});
