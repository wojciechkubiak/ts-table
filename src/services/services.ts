import { WorkService } from "./WorkService";

export interface Services {
    workService: WorkService;
}

const getServices = () => {
    const workService = new WorkService();
    return {workService};
}

export const services: Services = getServices();