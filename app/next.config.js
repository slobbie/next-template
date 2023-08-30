const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: false,  // 또는 true로 설정하면 301 리다이렉트가 됩니다.
          },
        ];
      },
}

module.exports = nextConfig
