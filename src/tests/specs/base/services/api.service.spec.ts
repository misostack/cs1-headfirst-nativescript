// (Angular w/TypeScript)
// As our intention is to test an Angular component that contains annotations 
// we need to include the reflect-metadata dependency.
import "reflect-metadata"; 
import { TestBed } from '@angular/core/testing';
import { ApiService } from "@base/services";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClientModule } from "@angular/common/http";



// A sample Jasmine test
describe("ApiService", () => {
  let apiService: ApiService
  beforeEach(() => {
    // load module
    TestBed.configureTestingModule({
      imports: [
        NativeScriptHttpClientModule,
        HttpClientModule,
      ],
      providers: [
        ApiService
      ]
    });
    // get instance of api service
    apiService = TestBed.get(ApiService)
  });
  
  it("should create an instance", () => {
    console.log(typeof(apiService))
    expect(apiService).toBeTruthy()
  });
});