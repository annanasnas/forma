import Main from '../views/Main.vue'
import FAQ from '../views/FAQ.vue'
import Projects from '../views/Projects.vue'
// import Footer from '../components/Footer.vue'

export const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/FAQ',
        component: FAQ
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/project/:project_id',
        component: () => import('../views/Project.vue')
    }
    // {
    //     path: "https://www.behance.net/formadigitalagency",
    //     component: Footer
    // }
]