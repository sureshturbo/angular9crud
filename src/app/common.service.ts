import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createuser(user:any){
    return this._http.post("http://localhost:3000/user",user);

  }
  getalluser(){
    return this._http.get("http://localhost:3000/user")
  }
  
  deleteuser(user:any){
    return this._http.delete("http://localhost:3000/user/" +user.id);

  }
updateuser(user: any){
   return this._http.put("http://localhost:3000/user/" +user.id, user);
}

}
