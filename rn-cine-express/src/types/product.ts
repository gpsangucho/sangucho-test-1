export type Product = {
    /*
    id: number;
    name: string;
    slug: string;
    price: string;     // viene como string en tu API
    stock: number;
    is_active: boolean;
    url_image: string;
    category_name: string;
    created_at: string;
    updated_at: string;
    */
    score: number;
    show: {
      id: number;
      url: string;
      name: string;
      type: string;
      language: string;
      genres: string[];
      status: string;
      runtime: number;
      averageRuntime: number;
      premiered: string;
      ended: string | null;
      officialSite: string | null;
      schedule: {
        time: string;
        days: string[];
      };
      rating: {
        average: number | null;
      };
      weight: number;
      network: {
        id: number;
        name: string;
        country: {
          name: string;
          code: string;
          timezone: string;
        };
        officialSite: string | null;
      } | null;
      webChannel: null | unknown;
      dvdCountry: null | unknown;
      externals: {
        tvrage: number | null;
        thetvdb: number | null;
        imdb: string | null;
      };
      image: {
        medium: string;
        original: string;
      } | null;
      summary: string;
      updated: number;
      _links: {
        self: {
          href: string;
        };
        previousepisode?: {
          href: string;
          name: string;
        };
      };
    };

    /**/
    
  };
  
  export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  };