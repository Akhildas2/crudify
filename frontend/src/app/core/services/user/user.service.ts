import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../../../shared/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.userApiUrl}`

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }

  updateUser(user: Partial<IUser>): Observable<IUser> {
    return this.http.put<IUser>(this.baseUrl, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  uploadPhoto(formData: FormData): Observable<any> {
    return this.http.post<IUser>(`${this.baseUrl}/upload-photo`, formData);
  }

  changePassword(id: string, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post<IUser>(`${this.baseUrl}/${id}/changePassword`, { password: currentPassword, newPassword });
  }

}
