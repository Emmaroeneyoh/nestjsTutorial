import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'emmaroempire-com',
      api_key: '951785774252847',
      api_secret: 'FT4e9SQilOylB5AstosaWqliUic',
    });
  },
};