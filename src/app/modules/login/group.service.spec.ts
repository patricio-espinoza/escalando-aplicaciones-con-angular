import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { GroupService } from './group.service';
import { environment } from 'src/environments/environment';

class HttpClientMock {
  get = jasmine.createSpy();
}

describe('Group Service', () => {
    let service: GroupService;
    let httpClientMocK: HttpClientMock;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
        providers: [
          GroupService,
          {
            provide: HttpClient,
            useClass : HttpClientMock
          }
        ]
      });
      service = TestBed.get(GroupService);
      httpClientMocK = TestBed.get(HttpClient);
    });


  it('it should have been created', () => {

    expect(service).toBeDefined();
  });

  it('it should have called http get service', () => {
    httpClientMocK.get.and.returnValue({
      toPromise() {}
    });

    service.getGroups();

    expect(httpClientMocK.get).toHaveBeenCalledWith(environment.endpoint.groups);

  });

});
