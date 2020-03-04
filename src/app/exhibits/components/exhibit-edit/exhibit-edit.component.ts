import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {ExhibitsService} from '../../services/exhibits.service';
import {Tour} from '../../../tours/models/tour.model';

@Component({
  selector: 'app-exhibit-edit',
  templateUrl: './exhibit-edit.component.html',
  styleUrls: ['./exhibit-edit.component.css']
})
export class ExhibitEditComponent implements OnInit {
  exhibitId: Exhibit;
  tourEntitySet: Tour[];
  error: string;
  isLoading = false;

  exhibitForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exhibitsService: ExhibitsService
  ) {
  }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.exhibitId = data.exhibit.exhibitId;
      this.tourEntitySet = data.exhibit.tourEntitySet;
      this.exhibitForm = new FormGroup({
        title: new FormControl(data.exhibit.title, [Validators.required, Validators.minLength(3)]),
        dated: new FormControl(data.exhibit.dated, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        material: new FormControl(data.exhibit.material, [Validators.required]),
        archiveNum: new FormControl(data.exhibit.archiveNum, [Validators.required]),
        description: new FormControl(data.exhibit.description, [Validators.required]),
        imageUrl: new FormControl(data.exhibit.imageUrl, [Validators.required]),
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

    this.exhibitsService.updateExhibit(this.exhibitId, title, dated, material, archiveNum, description, imageUrl, [])
      .subscribe(() => {
          this.router.navigate(['/exhibits']);
          this.isLoading = false;
        },
        errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        });
  }

  onCloseAlert() {
    this.error = '';
  }

}
