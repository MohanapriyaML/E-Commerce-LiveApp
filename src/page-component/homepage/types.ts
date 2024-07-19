// types.ts
export interface CollectionItem {
    id: number;
    attributes: {
      body: BodyItem[];
    };
  }
  
  export interface BodyItem {
    template_Id: number;
  }
  