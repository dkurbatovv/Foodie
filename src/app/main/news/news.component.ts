import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  email: string = '';

  constructor (private toastr: ToastrService) {
    
  }

  showSuccess() {
    this.toastr.success('Будем отправлять вам больше рецептов!', 'Вы подписались на новости', {
      timeOut: 5000,
      progressBar: true,
    });
  } 
}
