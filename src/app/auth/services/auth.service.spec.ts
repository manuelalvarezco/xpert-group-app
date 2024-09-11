import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClient,
  HttpHandler,
  provideHttpClient,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Auth } from '../models/auth.model';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  let tokenService: TokenService;
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        TokenService,
        HttpClient,
        HttpHandler,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for login()', () => {
    it('Should return a token', (doneFn) => {
      const mockData: Auth = {
        ok: true,
        user: {
          _id: '66e1e09aa9acfeddcd0e07ea',
          name: 'Manuel',
          email: 'admin@admin.com',
          status: true,
          __v: 0,
        },
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NmUxZTA5YWE5YWNmZWRkY2QwZTA3ZWEiLCJpYXQiOjE3MjYwOTEzNzQsImV4cCI6MTcyNjEzNDU3NH0.ThwciwA9qeXS72gtQxjIoVKkTS92uD6AXr1UyxgM4t4',
      };
      const email = 'admin@admin.com';
      const password = '123456';

      service.login({ email, password }).subscribe((data: any) => {
        expect(data).toEqual(mockData);
        doneFn();
      });

      const url = `${environment.API_URL}/auth/login`;
      const req = httpTesting.expectOne(url);
      req.flush(mockData);
      httpTesting.verify();

    });
  });
});
