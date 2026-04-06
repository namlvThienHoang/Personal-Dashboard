import fs from 'fs';
import path from 'path';
import { UserData, DashboardData } from '@/types';

const DATA_FILE = path.join(process.cwd(), 'data', 'dashboard.json');

const defaultData: DashboardData = {
  layout: ['weather', 'notes', 'tasks'],
  notes: '',
  tasks: [],
};

function ensureDataFile(): void {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({}, null, 2));
  }
}

export function readUserData(): UserData {
  ensureDataFile();
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(content) as UserData;
  } catch {
    return {};
  }
}

export function getUserData(email: string): DashboardData {
  const data = readUserData();
  return data[email] || { ...defaultData };
}

export function saveUserData(email: string, dashboardData: DashboardData): void {
  ensureDataFile();
  const data = readUserData();
  data[email] = dashboardData;
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
