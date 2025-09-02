export type Resource = {
  id: number;
  name: string;
  status: "Available" | "Busy";
};

export type Order = {
  id: number;
  name: string;
  resourceId?: number;
  startTime?: string;
  endTime?: string;
  status: "Pending" | "Scheduled";
};
