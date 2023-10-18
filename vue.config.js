module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}

// quality check tool ESLint will not be applied to your Vue.js project during the build process
// might result in missing potential issues tho