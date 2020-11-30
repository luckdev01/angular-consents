import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConsentFacade } from 'src/app/+store/consent/consent.facade';
import { IConsent } from '../../core/models/consent';

@Component({
  selector: 'app-collected-consents',
  templateUrl: './collected-consents.component.html',
  styleUrls: ['./collected-consents.component.scss']
})
export class CollectedConsentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['name', 'email', 'givenConsent'];
  dataSource: MatTableDataSource<IConsent>;
  loading$: Observable<boolean>;

  constructor(private consentFacade: ConsentFacade) {
    this.consentFacade.consents$.subscribe(res => {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.loading$ = this.consentFacade.loading$;
  }

  ngOnInit(): void {
    this.consentFacade.loadConsents();
  }
}
