import { AddMedicineDialogComponent } from './../../Shared/add-medicine-dialog/add-medicine-dialog.component';
import { EditDialogComponent } from './../../Shared/edit-dialog/edit-dialog.component';
import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/Core/Services/add-to-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IMedicine } from './../../Core/Models/IMedicine';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns : string[] = ["name", "category", "imgSrc" ,"quantity" ,"price" ,"edit", "delete"];
  // dataSource:any

  dataSource: any[] = [];
  medicines = new Array();

  constructor(private addToCartService: AddToCartService, private dialog: MatDialog) {

    this.medicines = [
      {
        name: 'Melga',
        category: 'Nerve Tonic',
        imgSrc: 'assets/Images/melga.jpg.webp',
        quantity: 3,
        price: 25
        , quantityAdded: 0
      },
      {
        name: 'Galvus',
        category: 'Diabetic',
        imgSrc: 'assets/Images/galvus.jpg',
        quantity: 2,
        price: 75
        , quantityAdded: 0
      },
      {
        name: 'Antinal',
        category: 'Stomach',
        imgSrc: 'assets/Images/antinal.jpg',
        quantity: 1,
        price: 27
        , quantityAdded: 0
      },
      {
        name: 'Epicogel',
        category: 'Stomach',
        imgSrc: 'assets/Images/epicogel.jpg',
        quantity: 4,
        price: 33
        , quantityAdded: 0
      },
      {
        name: 'Voltaren',
        category: 'Skin',
        imgSrc: 'assets/Images/voltaren.jpg',
        quantity: 6,
        price: 15
        , quantityAdded: 0
      },
      {
        name: 'Moov',
        category: 'Skin',
        imgSrc: 'assets/Images/moov.jpeg',
        quantity: 3,
        price: 11
        , quantityAdded: 0
      }
    ];

    this.dataSource = this.medicines;

  }

  ngOnInit(): void {

  }


  deleteItem(item: any) {
    const index = this.medicines.findIndex(m => m.name === item.name);
    if (index !== -1) {
      this.medicines.splice(index, 1);
      this.dataSource = [...this.medicines];
    }
    console.log(item);
    console.log(this.dataSource);
  }

//---------
// Edit an item
editItem(item: any): void {
  const dialogRef = this.dialog.open(EditDialogComponent, {
    data: item,
    width: '800px',
    height: '600px',
  });

  dialogRef.afterClosed().subscribe((updatedData: any) => {
    if (updatedData) {
      const index = this.medicines.findIndex(m => m.name === item.name);
      if (index !== -1) {
        this.medicines[index] = updatedData;
        this.dataSource = [...this.medicines];
      }
    }
  });
}

openAddDialog(): void {

  const dialogRef = this.dialog.open(AddMedicineDialogComponent, {
    width: '800px',
    height: '600px',
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.medicines.push(result);
      this.dataSource = [...this.medicines];
    }
  });
}

}
