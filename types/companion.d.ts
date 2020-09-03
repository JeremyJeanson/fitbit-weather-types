declare module "fitbit-weather/companion" {
    function setup(configuration: Configuration): void;

    interface Configuration {
        provider: number;
        apiKey: string;
    }

    interface ProvidersCodes {
        openweathermap: number;
        darksky: number;
        weatherbit: number;
    }
    const Providers:ProvidersCodes;
}