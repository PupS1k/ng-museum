import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../../core/models/exhibit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-exhibit-edit',
  templateUrl: './exhibit-edit.component.html',
  styleUrls: ['./exhibit-edit.component.css']
})
export class ExhibitEditComponent implements OnInit {
  exhibit: Exhibit;
  error: string;
  isLoading = false;

  exhibitForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.exhibit = data.exhibit;
      this.exhibitForm = new FormGroup({
        title: new FormControl(this.exhibit.title, [Validators.required, Validators.minLength(3)]),
        dated: new FormControl(this.exhibit.dated, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        material: new FormControl(this.exhibit.material, [Validators.required]),
        archiveNum: new FormControl(this.exhibit.archiveNum, [Validators.required]),
        description: new FormControl(this.exhibit.description, [Validators.required]),
        imageUrl: new FormControl(this.exhibit.imageUrl, [Validators.required]),
      });
    });
  }

  onSubmit() {
    const title = this.exhibitForm.value.title;
    const dated = this.exhibitForm.value.dated;
    const material = this.exhibitForm.value.material;
    const archiveNum = this.exhibitForm.value.archiveNum;
    const description = this.exhibitForm.value.description;
    const imageUrl = this.exhibitForm.value.imageUrl;

    this.isLoading = true;


    console.log(title, dated, material, archiveNum, description, imageUrl);

    // this.authService.login(name, password)
    //   .subscribe(() => {
    //       this.router.navigate(['/']);
    //       this.isLoading = false;
    //     },
    //     errorMessage => {
    //       this.isLoading = false;
    //       this.error = errorMessage;
    //     });
  }

  onCloseAlert() {
    this.error = '';
  }

}
