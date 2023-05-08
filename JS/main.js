import { coins } from "./Coins.js";
import { currency } from "./Currancy.js";
import { createRadioBtns, onClickRadioBtns } from "./radioBtns.js";
import { onChangeInput } from "./inputLogic.js";
import { dropDown } from "./burger.js";
import { showPopUp } from "./popUp.js";

const coinsDIV = document.querySelector('#coins');
const currencyDIV = document.querySelector('#currency');

const coinRadioBtns = createRadioBtns(coins);
const currancyRadioBtns = createRadioBtns(currency);

coinsDIV.append(coinRadioBtns);
currencyDIV.append(currancyRadioBtns)

{
   document.querySelectorAll('.circle')[0].classList.add('checked');
   document.querySelectorAll('.circle')[10].classList.add('checked');
}

export const payPlaceholder = document.getElementById('pay_method');

const [coinsInput, currencyInput, coinsBoard, currencyBoard] = [...document.querySelectorAll('.input_div')];
const resCpoinsInput = document.querySelectorAll('.input_div')[7];
export const resCoinsMain = document.querySelectorAll('.input_div')[10];
const resCurrancyInput = document.querySelectorAll('.input_div')[8];

onClickRadioBtns(coinRadioBtns, coinsInput);
onClickRadioBtns(currancyRadioBtns, currencyInput);

onClickRadioBtns(coinRadioBtns, coinsBoard);
onClickRadioBtns(currancyRadioBtns, currencyBoard);

onClickRadioBtns(coinRadioBtns, resCpoinsInput);
onClickRadioBtns(coinRadioBtns, resCoinsMain);
onClickRadioBtns(currancyRadioBtns, resCurrancyInput);

const inputDivs = document.querySelectorAll('.input_div');

onChangeInput(inputDivs)

const burger = document.querySelector('.burger');
const dropdownList = document.querySelector('.drop_links');

const submitBtn = document.querySelector('#submit');
export const popUpForm = document.querySelector('#form_pop_up_background');
export const popUpPurchase= document.querySelector('#purchase_pop_up_background');
const payBtn = document.querySelector('#pay');
export const reloadBtn = document.querySelector('#reloadBtn');

dropDown(burger,dropdownList)

showPopUp(submitBtn,popUpForm)
showPopUp(payBtn,popUpPurchase)