export type Resource = {
  id: number;
  name: string;
  quantity: number;
  status: "Available" | "Busy";
};

export type Order = {
  id: number;
  name: string;
  resourceId?: number;
  quantity: number;
  startTime?: string;
  endTime?: string;
  status: "Pending" | "Scheduled";
};
