export enum RoleNames {
  Technician = "TECHNICIAN",
  KanbanPO = "KANBAN_PO",
  KanbanPL = "KANBAN_PL",
  KanbanViewer = "KANBAN_VIEWER",
  KanbanConstructor = "KANBAN_CONSTRUCTOR",
  KanbanGauger = "KANBAN_GAUGER",
  KanbanGod = "KANBAN_GOD",
  PlanningAdmin = "PLANNING_ADMIN",
}

export interface Role {
  description: string;
  name: RoleNames;
  persistanceUnit: string;
}

export interface Site {
  id: number;
  image: string;
  name: string;
  url: string;
}

export interface User {
  abacusName: string | null;
  email: string;
  isActivated: boolean | null;
  name: string | null;
  password: string | null;
  persistanceUnit: string;
  roles: Role[];
  sites: Site[];
  slackEmail: string | null;
  technicianId: number;
}
