import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  users: any[];
  formulario: FormGroup;

  constructor(private userService: UsersService, private router: Router) {
    this.users = [
      { "name": "Lorenzo", "surname": "López", "age": 29, "tratement": 90 },
      { "name": "Lorenzo", "surname": "López", "age": 29, "tratement": 80 },
      { "name": "Lorenzo", "surname": "López", "age": 29, "tratement": 70 },
      { "name": "Lorenzo", "surname": "López", "age": 29, "tratement": 60 }
    ];
    this.formulario = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      age: new FormControl(),
      tratement: new FormControl()
    })
  }

  async ngOnInit() {
    try {
      this.users = await this.userService.getAll();
    } catch (error) {
      console.log(error);
    }
  }
  async onSubmit() {
    const response = await this.userService.create(this.formulario.value);
    this.formulario.reset();
    if (response.fatal) {
      return alert(response.fatal);
    }
    this.router.navigate(['/']);
  }
}
