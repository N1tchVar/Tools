/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            canvas: 'canvas',
        })

        return config
    },
}

module.exports = nextConfig
