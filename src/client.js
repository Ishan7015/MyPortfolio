import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'strrnzj4',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: 'skdkOrI6CWpE7GvBCycynSFUsi3dAas3zdABaaJKOO55YN8nobycu6SmYM3Tvmcl2ic8MueZFa44IL05oYzsON9vyUr26G54stAAoQ4ZM0DLh78pwUu9vetT3zIhw4A9DjEXrRTRSrdEphjdlqnPjS2iXMAFQfso95oeYC8ftLaV90RFmEtf'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);