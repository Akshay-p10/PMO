import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  constructor() { }

  private empId = null;
  private projId = null;
  setEmpId(id) {
    this.empId = id;
  }

  getEmpId() {
    return this.empId;
  }

  setProjId(id) {
    this.projId = id;
  }

  getProjId() {
    return this.projId;
  }


}
