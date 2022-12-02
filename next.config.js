/** @type {import('next').NextConfig} */
// const dedicatedEndPoint = 'https://ipfs.infura.io:5001';
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['realestatetoken.infura-ipfs.io', 'infura-ipfs.io'],
    },

};
// nft-marketplace777.
module.exports = nextConfig;