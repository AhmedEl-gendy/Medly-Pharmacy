import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-medicine-dialog',
  templateUrl: './add-medicine-dialog.component.html',
  styleUrls: ['./add-medicine-dialog.component.css']
})
export class AddMedicineDialogComponent implements OnInit{

  name: string = "";
  category: string = "";
  imgSrc: string = "";
  quantity: number = 0;
  price: number = 0;
  selectedFile: any;

  constructor(
    public dialogRef: MatDialogRef<AddMedicineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}


  onSelectingImg(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }


  onAddClick(): void {
    const newItem = {
      name: this.name,
      category: this.category,
      imgSrc: this.imgSrc,
      quantity: this.quantity,
      price: this.price
    };
    this.dialogRef.close(newItem);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }



}



