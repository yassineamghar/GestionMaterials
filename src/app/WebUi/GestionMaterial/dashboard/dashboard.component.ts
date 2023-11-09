import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activityValues: any;
statuses: any[]|undefined;
representatives: any[]|undefined;
getSeverity(arg0: any): string|undefined {
throw new Error('Method not implemented.');
}
clear(_t8: Table) {
throw new Error('Method not implemented.');
}
loading: boolean|undefined;

@ViewChild('dt1', { static: true }) dt1!: Table;

// ... other component code

handleInput(event: Event): void {
  if (event.target instanceof HTMLInputElement) {
    const inputValue = event.target.value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }
}


customers: any[] = [
  { id: 1, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 2, name: 'Johnsdf Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 3, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 4, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 5, name: 'John Dsdfoe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 6, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 7, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 8, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 9, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 10, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 11, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 12, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 13, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 14, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 15, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 16, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 17, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 18, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 19, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 20, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 21, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true },
  { id: 22, name: 'John Doe', country: { name: 'USA', code: 'us' }, representative: { name: 'Agent 1', image: 'agent1.jpg' }, date: new Date(), balance: 1000, status: 'Active', verified: true }
  // Add more customers as needed
  // ...
];
}
