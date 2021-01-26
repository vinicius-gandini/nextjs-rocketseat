import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://dev-commerce-rocketseat.cdn.prismic.io/api/v2';

export const client = (req = null) => {
    const options = req ? { req } : null;

    return Prismic.client(apiEndpoint, options)
}