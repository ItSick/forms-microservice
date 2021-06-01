export interface Form {
   
  id: string;
  name: string;
  version: number;
  steps: number;
  variant: string;
  hostingApps: [];
  createdBy: string;
  updateBy: string;
  createDate: Date;
  elements: [];
}