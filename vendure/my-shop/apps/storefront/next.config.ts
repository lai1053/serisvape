import {NextConfig} from 'next';

const nextConfig: NextConfig = {
    cacheComponents: true,
    images: {
        // This is necessary to display images from your local Vendure instance
        dangerouslyAllowLocalIP: true,
        unoptimized: true,
        domains: ['cdn.vaapee.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.vaapee.com',
                pathname: '/**',
                search: '*',
            },
            {
                protocol: 'http',
                hostname: '175.178.87.111',
                port: '3002',
                pathname: '/assets/**',
            },
            {
                hostname: 'readonlydemo.vendure.io',
            },
            {
                hostname: 'demo.vendure.io'
            },
            {
                hostname: 'localhost'
            }
        ],
    },
    experimental: {
        rootParams: true
    }
};

export default nextConfig;
