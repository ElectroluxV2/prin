import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [{
    id: 1,
    name: 'Méghane Dewerson',
    img: 'url("assets/img/1.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done',
    time: '4 sec ago',
    color: 'primary'
  }, {
    id: 2,
    name: 'Jú Harriot',
    img: 'url("assets/img/2.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done_all',
    time: '4 sec ago',
    color: 'accent'
  }, {
    id: 3,
    name: 'Lén Crowter',
    img: 'url("assets/img/3.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done',
    time: '4 sec ago',
    color: 'primary'
  }, {
    id: 4,
    name: 'Wá Bernasek',
    img: 'url("assets/img/4.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done_all',
    time: '4 sec ago',
    color: 'accent'
  }, {
    id: 5,
    name: 'Laïla Likly',
    img: 'url("assets/img/5.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'error',
    time: '4 sec ago',
    color: 'warn'
  }, {
    id: 6,
    name: 'Lucrèce Fullbrook',
    img: 'url("assets/img/6.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done',
    time: '4 sec ago',
    color: 'primary'
  }, {
    id: 7,
    name: 'Mélinda Carpmile',
    img: 'url("assets/img/7.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done_all',
    time: '4 sec ago',
    color: 'accent'
  }, {
    id: 8,
    name: 'Anaëlle Redit',
    img: 'url("assets/img/8.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'error',
    time: '4 sec ago',
    color: 'warn'
  }, {
    id: 9,
    name: 'Thérèse Chantree',
    img: 'url("assets/img/9.jpg")',
    text: 'The Shiba Inu is the smallest is the smallest is the smallest is the smallest.',
    icon: 'done_all',
    time: '4 sec ago',
    color: 'accent'
  }]
  constructor() { }
}
