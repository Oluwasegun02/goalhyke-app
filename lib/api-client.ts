// API client for backend communication
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export interface Goal {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface CreateGoalDto {
  title: string;
  description?: string;
}

export interface UpdateGoalDto {
  title?: string;
  description?: string;
  completed?: boolean;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Goal API methods
  async getGoals(): Promise<Goal[]> {
    return this.request<Goal[]>("/goals");
  }

  async getGoal(id: string): Promise<Goal> {
    return this.request<Goal>(`/goals/${id}`);
  }

  async createGoal(data: CreateGoalDto): Promise<Goal> {
    return this.request<Goal>("/goals", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async updateGoal(id: string, data: UpdateGoalDto): Promise<Goal> {
    return this.request<Goal>(`/goals/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  async deleteGoal(id: string): Promise<void> {
    return this.request<void>(`/goals/${id}`, {
      method: "DELETE",
    });
  }
}

export const apiClient = new ApiClient(API_URL);
