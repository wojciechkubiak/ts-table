export interface RawAssigned {
  person_name: string;
  status: string;
}

export interface RawWorkData {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: RawAssigned[];
  status: string;
  priority: string;
}

export interface RawResponse {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: RawWorkData[];
}

export interface RawData {
  exec_time: number;
  response: RawResponse;
}

export interface Assigned {
  personName: string;
  status: string;
}

export interface WorkData {
  workOrderId: number;
  description: string;
  receivedData: string;
  assignedTo: Assigned[];
  status: string;
  priority: string;
}
