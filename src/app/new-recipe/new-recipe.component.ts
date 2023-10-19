import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  recipeForm: FormGroup;
  selectedFile: File | null = null;
  
  
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      recipeDescription: ['', Validators.required],
      recipePhoto: ['', Validators.required],
      recipeCategory: ['', Validators.required],
      recipeTime: ['', Validators.required],
      recipeFirstThing: ['', Validators.required],
      recipeB: ['', Validators.required],
      recipeG: ['', Validators.required],
      recipeU: ['', Validators.required],
      recipeK: ['', Validators.required],
      recipeShort: ['', Validators.required],
      recipeFirstStep: ['', Validators.required]
    });
    console.log(this.authService.isAuthenticated);
    console.log(this.authService.userRole);
  }

  onFileSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }

  onSubmit() {
    const token = this.authService.getAccessToken();
  
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  

      if (this.selectedFile) {

        const fileData = new FormData();
        fileData.append('image', this.selectedFile, this.selectedFile.name);

        this.http.post('https://ea-backend.wckz.space/posts', fileData, { headers }).subscribe(
          (imageResponse: any) => {
            
            const imageUrl = imageResponse.url; 
  
            
            const recipeData = {
              title: this.recipeForm.get('recipeName')?.value || '',
              body: this.recipeForm.get('recipeDescription')?.value || '',
              tags: this.recipeForm.get('recipeCategory')?.value || '',
              image: imageUrl, 
              favorite: true,
              timeCooking: parseInt(this.recipeForm.get('recipeTime')?.value || '0', 10),
              foodValue: {
                calories: parseFloat(this.recipeForm.get('recipeK')?.value || '0'),
                fats: parseFloat(this.recipeForm.get('recipeG')?.value || '0'),
                carbohydrates: parseFloat(this.recipeForm.get('recipeU')?.value || '0'),
                belki: parseFloat(this.recipeForm.get('recipeB')?.value || '0'),
              },
              additionalInformation: {
                ingredients: [this.recipeForm.get('recipeFirstThing')?.value || ''],
                details: [
                  {
                    title: this.recipeForm.get('recipeShort')?.value || '',
                    body: this.recipeForm.get('recipeFirstStep')?.value || '',
                  },
                ],
              },
            };
  
          
            this.http.post('https://ea-backend.wckz.space/posts', recipeData, { headers }).subscribe(
              (recipeResponse: any) => {
                console.log('Рецепт успешно отправлен', recipeResponse);
                
              },
              (recipeError) => {
                console.error('Произошла ошибка при отправке рецепта', recipeError);
                
              }
            );
          },
          (imageError) => {
            console.error('Произошла ошибка при загрузке изображения', imageError);
          }
        );
      } else {
        console.error('Изображение не выбрано');
      }
    } else {
      this.checkAndMarkInvalidFields();
    }
  }
  


  checkAndMarkInvalidFields() {
    for (const controlName in this.recipeForm.controls) {
      if (this.recipeForm.controls[controlName].invalid) {
        const input = document.querySelector(`[formControlName="${controlName}"]`) as HTMLInputElement;
        if (input) {
          const warningIcon = input.nextElementSibling as HTMLElement;
          if (warningIcon) {
            warningIcon.style.display = 'inline'; 
          }
          input.classList.add('error-border');
          input.classList.add('warning')
        }
      }
    }
  }

}
