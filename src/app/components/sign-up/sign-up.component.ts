import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMsg : string ='';

  constructor( private as : AuthService, private user : UserService, private router : Router) { }


  ngOnInit(): void {
  }


  signup(form)
  {
      //  console.log(form.value.name);
      //  console.log(form.value.address);

      this.as.signup(form.value.email  , form.value.password  )

      .then( data => {


          this.user.addNewUser(data.user.uid, form.value.name , form.value.address )
          this.errorMsg = ''
          this.router.navigate(['/'])
      }
        
        
        )
      .catch( err => this.errorMsg = err)



    //  this.as.signup(form.value.Email , form.value.Password)
    //  .then(  data =>
    //    {
    //       this.user.addNewUser(data.user.uid, form.value.name, form.value.Address)
    //       //this.errorMsg =''
    //       this.router.navigate(['/'])

    //         }


    //  )
    //  .catch(  err => console.log(err))
  }
}
