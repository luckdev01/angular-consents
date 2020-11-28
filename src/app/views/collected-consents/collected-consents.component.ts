import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-collected-consents',
  templateUrl: './collected-consents.component.html',
  styleUrls: ['./collected-consents.component.scss'],
})
export class CollectedConsentsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'email', 'givenConsent'];
  dataSource: MatTableDataSource<IConsent>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 consents
    const consents: IConsent[] = [];
    for (let i = 1; i <= 20; i++) {
      consents.push(createNewConsent(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(consents);
  }

  ngOnInit(): void {}

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

/** Builds and returns a new Consent. */
function createNewConsent(id: number): IConsent {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name,
    email: Math.round(Math.random() * 100).toString(),
    givenConsent:
      CONSENTS[Math.round(Math.random() * (CONSENTS.length - 1))].value,
  };
}

/** Constants used to fill up our data base. */
const CONSENTS = [
  { id: 'receiveNewsletter', value: 'Receive newsletter' },
  { id: 'showTargetedAds', value: 'Be shown targeted ads' },
  {
    id: 'contributeToAnonymous',
    value: 'Contribute to anonymous visit statistics',
  },
];
const NAMES = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

export interface IConsent {
  id: string;
  name: string;
  email: string;
  givenConsent: string;
}
