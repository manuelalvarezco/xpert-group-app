import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { BreedsService } from './breeds.service';
import {
  HttpClient,
  HttpHandler,
  provideHttpClient,
} from '@angular/common/http';
import { Breed } from '../model/breed.model';
import { environment } from '../../../environments/environment';
import { BreedImage } from '../model/breed-image.model';

describe('BreedsService', () => {
  let service: BreedsService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BreedsService,
        HttpClient,
        HttpHandler,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getBreeds()', () => {
    it('should return a breeds list', (doneFn) => {
      const mockData: Breed[] = [
        {
          _id: 'CvhOrd3S_',
          url: 'https://cdn2.thecatapi.com/images/CvhOrd3S_.jpg',
          breeds: {
            weight: {
              imperial: '4 - 10',
              metric: '2 - 5',
            },
            id: 'bali',
            name: 'Balinese',
            cfa_url: 'http://cfa.org/Breeds/BreedsAB/Balinese.aspx',
            vetstreet_url: 'http://www.vetstreet.com/cats/balinese',
            vcahospitals_url:
              'https://vcahospitals.com/know-your-pet/cat-breeds/balinese',
            temperament: 'Affectionate, Intelligent, Playful',
            origin: 'United States',
            country_codes: 'US',
            country_code: 'US',
            description:
              'Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner. ',
            life_span: '10 - 15',
            indoor: 0,
            alt_names: 'Long-haired Siamese',
            adaptability: 5,
            affection_level: 5,
            child_friendly: 4,
            dog_friendly: 5,
            energy_level: 5,
            grooming: 3,
            health_issues: 3,
            intelligence: 5,
            shedding_level: 3,
            social_needs: 5,
            stranger_friendly: 5,
            vocalisation: 5,
            experimental: 0,
            hairless: 0,
            natural: 0,
            rare: 0,
            rex: 0,
            suppressed_tail: 0,
            short_legs: 0,
            wikipedia_url: 'https://en.wikipedia.org/wiki/Balinese_(cat)',
            hypoallergenic: 1,
            reference_image_id: '13MkvUreZ',
          },
          name: 'Balinese',
          breed_id: 'bali',
        },
      ];
      service.getBreeds().subscribe((data: any) => {
        expect(data.length).toEqual(mockData.length);
        expect(data).toEqual(mockData);
        doneFn();
      });

      const url = `${environment.API_URL}/breeds`;
      const req = httpTesting.expectOne(url);
      req.flush(mockData);
      httpTesting.verify();
    });
  });
  describe('Test for getBreedById()', () => {
    it('should return a breed object', (doneFn) => {
      const mockData: Breed = {
        _id: 'CvhOrd3S_',
        url: 'https://cdn2.thecatapi.com/images/CvhOrd3S_.jpg',
        breeds: {
          weight: {
            imperial: '4 - 10',
            metric: '2 - 5',
          },
          id: 'bali',
          name: 'Balinese',
          cfa_url: 'http://cfa.org/Breeds/BreedsAB/Balinese.aspx',
          vetstreet_url: 'http://www.vetstreet.com/cats/balinese',
          vcahospitals_url:
            'https://vcahospitals.com/know-your-pet/cat-breeds/balinese',
          temperament: 'Affectionate, Intelligent, Playful',
          origin: 'United States',
          country_codes: 'US',
          country_code: 'US',
          description:
            'Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner. ',
          life_span: '10 - 15',
          indoor: 0,
          alt_names: 'Long-haired Siamese',
          adaptability: 5,
          affection_level: 5,
          child_friendly: 4,
          dog_friendly: 5,
          energy_level: 5,
          grooming: 3,
          health_issues: 3,
          intelligence: 5,
          shedding_level: 3,
          social_needs: 5,
          stranger_friendly: 5,
          vocalisation: 5,
          experimental: 0,
          hairless: 0,
          natural: 0,
          rare: 0,
          rex: 0,
          suppressed_tail: 0,
          short_legs: 0,
          wikipedia_url: 'https://en.wikipedia.org/wiki/Balinese_(cat)',
          hypoallergenic: 1,
          reference_image_id: '13MkvUreZ',
        },
        name: 'Balinese',
        breed_id: 'bali',
      };
      service.getBreedById('CvhOrd3S_').subscribe((data: any) => {
        expect(data).toEqual(mockData);
        doneFn();
      });

      const id = 'CvhOrd3S_';
      const url = `${environment.API_URL}/breeds/${id}`;
      const req = httpTesting.expectOne(url);
      req.flush(mockData);
      httpTesting.verify();
    });
  });
  describe('Test for getBreedImagesById()', () => {
    it('should return a breed object', (doneFn) => {
      const mockData: BreedImage[] = [
        {
          breeds: [
            {
              weight: {
                imperial: '6 - 12',
                metric: '3 - 5',
              },
              id: 'bure',
              name: 'Burmese',
              cfa_url: 'http://cfa.org/Breeds/BreedsAB/Burmese.aspx',
              vetstreet_url: 'http://www.vetstreet.com/cats/burmese',
              vcahospitals_url:
                'https://vcahospitals.com/know-your-pet/cat-breeds/burmese',
              temperament:
                'Curious, Intelligent, Gentle, Social, Interactive, Playful, Lively',
              origin: 'Burma',
              country_codes: 'MM',
              country_code: 'MM',
              description:
                'Burmese love being with people, playing with them, and keeping them entertained. They crave close physical contact and abhor an empty lap. They will follow their humans from room to room, and sleep in bed with them, preferably under the covers, cuddled as close as possible. At play, they will turn around to see if their human is watching and being entertained by their crazy antics.',
              life_span: '15 - 16',
              indoor: 0,
              lap: 1,
              alt_names: '',
              adaptability: 5,
              affection_level: 5,
              child_friendly: 4,
              dog_friendly: 5,
              energy_level: 4,
              grooming: 1,
              health_issues: 3,
              intelligence: 5,
              shedding_level: 3,
              social_needs: 5,
              stranger_friendly: 5,
              vocalisation: 5,
              experimental: 0,
              hairless: 0,
              natural: 0,
              rare: 0,
              rex: 0,
              suppressed_tail: 0,
              short_legs: 0,
              wikipedia_url: 'https://en.wikipedia.org/wiki/Burmese_(cat)',
              hypoallergenic: 1,
              reference_image_id: '4lXnnfxac',
            },
          ],
          id: '92D9NZLs0',
          url: 'https://cdn2.thecatapi.com/images/92D9NZLs0.jpg',
          width: 3260,
          height: 1685,
        },
      ];
      service.getBreedById('CvhOrd3S_').subscribe((data: any) => {
        expect(data).toEqual(mockData);
        doneFn();
      });

      const id = 'CvhOrd3S_';
      const url = `${environment.API_URL}/breeds/${id}`;
      const req = httpTesting.expectOne(url);
      req.flush(mockData);
      httpTesting.verify();
    });
  });
});
