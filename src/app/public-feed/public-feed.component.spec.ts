import { async, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PublicFeedComponent } from './public-feed.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { PublicFeedRoutingModule } from './public-feed-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PublicFeedService } from '../layout/services/public-feed-service';

describe('PublicFeedComponent', () => {
  let component: PublicFeedComponent;
  let fixture: ComponentFixture<PublicFeedComponent>;
  let publicFeedService: PublicFeedService;
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        PublicFeedRoutingModule,
        FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [PublicFeedComponent],
      providers: [PublicFeedService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFeedComponent);
    component = fixture.componentInstance;
    publicFeedService = TestBed.get(PublicFeedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getFlickrPictures service', inject([PublicFeedService], (service: PublicFeedService) => {
    expect(service).toBeTruthy();
  }));
  it('is broken when empty', () => {
    if (component.photoArr) {
      expect(component.photoArr.length > 0).toBeFalsy();
    }
  });
  it('should have SEARCH SECTION', () => {
    spyOn(publicFeedService, 'getFlickrPictures').and.returnValue('../../assets/stubs/public-feed.json');
    const serachSection = fixture.debugElement.queryAll(By.css('.search-section'))[0];
    if (serachSection) {
      const isPresent = serachSection.nativeElement;
      expect(isPresent.innerHTML).toContain('input');
    }
  });
  it('should have GRID VIEW OF IMAGES FROM FLICKR', () => {
    const gridSection = fixture.debugElement.queryAll(By.css('.grid-view-flickr'))[0];
    if (gridSection) {
      const isPresent = gridSection.nativeElement;
      expect(isPresent.innerHTML).toContain('img');
    }
  });
  it('should call getFlickrPictures upon click of SEARCh button', () => {
    const searchBtn = fixture.debugElement.queryAll(By.css('.search-btn'))[0];
    if (searchBtn) {
      const isClicked = searchBtn.nativeElement.click();
      tick();
      expect(component.getFlickrPictures).toHaveBeenCalled();
    }
  });
});
