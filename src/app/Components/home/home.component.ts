import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/Core/Services/add-to-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  medicines = new Array();
  filterMedicine = new Array();

  chips = new Array(["All"])

  constructor(private addToCartService :AddToCartService){

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

    this.medicines.forEach(medicine =>{
      if (!this.chips.includes(medicine.category))
        this.chips.push(medicine.category)
    });


    this.filterMedicine=this.medicines;

    // this.addToCartService.setItems(medicines);
  }

  getData(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterMedicine= this.medicines.filter((m:any) => m.name.toLowerCase().includes(filterValue.toLowerCase())) ;
  }

  filterByCategory(chip:any)
  {
    if (chip == "All")
      this.filterMedicine = this.medicines;
    else
    this.filterMedicine = this.medicines.filter(medicine => medicine.category === chip);
  }

  addToCart(item: any) {
    const items = this.addToCartService.getItems();
    items.push(item);
    this.addToCartService.setItems(items);
  }


}
