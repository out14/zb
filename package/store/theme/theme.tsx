export class ThemeController {
    static getTheme(){
        const theme = localStorage.getItem('COLOR');
        return theme
    }

    static change({color}:{color:string}){
        localStorage.setItem('COLOR',color)
    }
}