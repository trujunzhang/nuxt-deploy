import { AxiosRequestConfig } from 'axios';
export declare class AxiosUtils {
    static post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<T>>;
    static get<T = any>(url: string, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<T>>;
}
