import { WorkData, RawWorkData, RawAssigned, Assigned, RawData } from "../models/Work";

import mockData from "../assets/data.json";

interface IWorkService {
  getData(): Promise<WorkData[]>;
}

const requestData = (): Promise<RawData> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(mockData);
      }, 1500);
    } catch (e) {
      console.error(e);
      reject();
    }
  });
};

export class WorkService implements IWorkService {
  async getData(): Promise<WorkData[]> {
    const workData: WorkData[] = await requestData()
      .then((res : RawData) => {
        const data = res.response?.data;

        if(data) {
          return data.map((element) => this.mapRawWorkDataToData(element));
        }
        
        return [];
      })
      .catch((e) => {
        console.error(e);
        return [];
      });

    return workData;
  }

  private mapRawAssignedDataToData(data: RawAssigned): Assigned {
    return {
      personName: data.person_name, 
      status: data.status,
    }
  }

  private mapRawWorkDataToData(data: RawWorkData): WorkData {
    const assigned: Assigned[] = [];

    for(const d of data.assigned_to) {
      assigned.push(this.mapRawAssignedDataToData(d));
    }

    return {
      workOrderId: data.work_order_id,
      description: data.description, 
      receivedData: data.received_date,
      assignedTo: assigned, 
      status: data.status, 
      priority: data.priority,
    };
  }
}
