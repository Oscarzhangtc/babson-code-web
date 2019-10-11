import Home from "./components/Home.vue"
import AboutUs from "./components/aboutus.vue"
import ContactUs from "./components/contactus.vue"

export const routes =[
    {path: '/', component: Home},
    {path: '/about', component: AboutUs},
    {path: '/contact', component: ContactUs},
]