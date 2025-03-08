import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse } from '../interfaces/products-response.interface';
import { Observable, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'
import { environment } from 'src/environments/environment';


const baseUrl = environment.baseUrl

interface Options {
  limit?: number;
  offset?: number;
  category?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.getProducts({})
  });
  // vehicles = computed(() => this.vehiclesResource.value() ?? [] as Vehicle[]);
  // error = computed(() => this.vehiclesResource.error() as HttpErrorResponse);
  // errorMessage = computed(() => setErrorMessage(this.error(), 'Vehicle'));
  // isLoading = this.vehiclesResource.isLoading;


  getProducts(options: Options): Observable<ProductsResponse> {

    const { limit = 12, offset = 0, category = '' } = options;
    return this.http
      .get<ProductsResponse>(`${baseUrl}/products`, {
        params: {
          limit,
          offset,
          category
        }
      })
      .pipe(
        tap((console.log))
      )
  }

}
