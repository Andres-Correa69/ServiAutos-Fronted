import { axiosClient } from "../clients/axiosClient";
import { ENDPOINTS } from "../endpoints";

export class ExampleApi {
  static async fetchExample() {
    const response = await axiosClient.get(ENDPOINTS.EXAMPLE);
    return response.data.data;
  }
}
