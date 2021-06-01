import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fillingPrice:number = 1
  inscriptionCheckBox:boolean
  totalPrice:number
  includeCandles:boolean
  personName:string = ''
  personAddress:string = ''
  personPhoneNumber:string = ''
  inscriptionText:string = ''

  fillings = [
    {
      name:'Select Filling',
      price:1
    },
    {
      name:'Lemon($5)',
      price:20

  },
  {
    name:'Custard($5)',
    price:5

},
{
  name:'Fudge($7)',
  price:7

},
{
  name:'Mocha($8)',
  price:8

},
{
  name:'Raspberry($10)',
  price:10

},
{
  name:'Pineapple($5)',
  price:5

},
{
  name:'Dobash($9)',
  price:9

},
{
  name:'Mint($5)',
  price:5

},
{
  name:'Cherry($5)',
  price:5

},
{
  name:'Apricot($8)',
  price:8

},
{
  name:'Buttercream($7)',
  price:7

},
{
  name:'Chocolate Mousse($12)',
  price:12

},

]
prevoiusCakeValue = 0
prevoiusfallingValue = 0
total = 0
  constructor(private toastr: ToastrService,
    private simpleModalService:SimpleModalService) { }

  ngOnInit(): void {
  }
  changeCakeSize(price) {
    this.priceCalculation(this.prevoiusCakeValue,price)
    this.prevoiusCakeValue = price
  }
  onChangeFilling(price) {
    this.priceCalculation(this.prevoiusfallingValue,price)
    this.prevoiusfallingValue = price


  }
  checkValue(price) {
    if(price ==5 || price == 20){

    this.priceCalculation(0,price)

    }else {

    this.priceCalculation(0,price)
    }
  }
  priceCalculation(prevoius:number,newValue:number) {

    this.total = this.total-prevoius
    this.total = this.total+newValue
    console.log('this.total',this.total)

  }
  contactInfo() {
    if((this.personName.length < 1) || (this.personAddress.length < 1) || (this.personPhoneNumber.length < 1)){

      this.toastr.error('Please Fill all the field','Before Submitting Form')
      return
    }
    this.showConfirm(this.personName,this.personAddress,this.personPhoneNumber,this.total,this.inscriptionText)
  }
  showConfirm(name,address,phoneNumber,price,iText) {
    let disposable = this.simpleModalService.addModal(ConfirmComponent, {
      personName:name,
      personAddress:address,
      personPhoneNumber:phoneNumber,
      totalPrice:price,
      inscuprtionText:iText

        })
        .subscribe((isConfirmed)=>{
            //We get modal result
            if(isConfirmed) {

            }
            else {
            }
        });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
      }
}
