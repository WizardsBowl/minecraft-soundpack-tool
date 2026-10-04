export interface PackConfig {
    general: GeneralPackConfig;
    java: JavaPackConfig;
    bedrock: BedrockPackConfig;
}

export interface GeneralPackConfig {
    name: string;
    description?: string;
    icon?: File;
}

export interface JavaPackConfig {
    namespace: string;
    format: number;
}

export interface BedrockPackConfig {
    header_uuid: string;
    module_uuid: string;
}