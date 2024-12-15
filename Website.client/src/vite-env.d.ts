interface ImportMetaEnv {
    readonly VITE_URI: string
    readonly VITE_PRODUCTION: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}