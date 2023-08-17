import WeatherWidget from './WeatherWidget/weather-widget.vue'

const useWeatherWidget = {
    install: (app: { component: (a: string, b: any) => void }) => {
        app.component('WeatherWidget', WeatherWidget);
    }
}

export { useWeatherWidget }