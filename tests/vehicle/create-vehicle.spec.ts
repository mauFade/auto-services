import { test, expect, describe } from "vitest";
import { VehicleRepositoryMock } from "./mocks/vehicle-repository-mock";
import { CreateVehicleUseCase } from "../../src/application/vehicle/usecase/create-vehicle-use-case";
import { Vehicle } from "../../src/application/vehicle/model/vehicle";

const mockRepo = new VehicleRepositoryMock();

const uc = CreateVehicleUseCase.getInstance(mockRepo);

test("Create a vehicle correcly", () => {
  describe("shoult create a vehicle", async () => {
    expect(
      uc.execute({
        name: "Test",
        userId: "test",
      })
    ).not.toThrow();
  });
});

test("Create vehicle and return", () => {
  describe("should return a vehicle", async () => {
    const vehicle = await uc.execute({
      name: "Test",
      userId: "test",
    });

    expect(vehicle).toBeInstanceOf(Vehicle);
  });
});
