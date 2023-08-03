import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  users: any[];

  constructor(private userService: UsersService) {
    this.users = [];
  }

  async ngOnInit() {
    try {
      this.users = await this.userService.getAll();
    } catch (error) {
      console.log(error);
    }
  }
}
