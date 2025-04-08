import { ApiResponse } from "@/types";
import { handleApiError } from "@/lib/utils/helperFunctions";
import api from "@/lib/apis";

export const chatWithBot = async (userQuery: string): Promise<ApiResponse> => {
    try {
        const response = await api.get<ApiResponse>(`/ai/chat?query=${encodeURIComponent(userQuery)}`);
        return response.data;
    } catch (error) {
        return handleApiError(error);
    }
};
