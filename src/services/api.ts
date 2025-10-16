import type { ApiResponse, OptimizationRecord } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export class ApiService {
  private async fetchApi<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || "Request failed",
        };
      }

      return data;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error",
      };
    }
  }

  async optimizeProduct(asin: string) {
    return this.fetchApi("/optimize", {
      method: "POST",
      body: JSON.stringify({ asin }),
    });
  }

  async getHistory(asin?: string): Promise<ApiResponse<OptimizationRecord[]>> {
    const url = asin ? `/history?asin=${asin}` : "/history";
    return this.fetchApi(url, { method: "GET" });
  }

  async getOptimizationById(
    id: string
  ): Promise<ApiResponse<OptimizationRecord>> {
    return this.fetchApi(`/history/${id}`, { method: "GET" });
  }

  async deleteOptimization(id: string): Promise<ApiResponse<null>> {
    return this.fetchApi(`/history/${id}`, { method: "DELETE" });
  }
}

export const apiService = new ApiService();
