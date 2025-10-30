import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import( '@/views/HomeView.vue' ),
        meta: {
            title: 'Virtuarama - Multiple Choice Assessment Platform'
        }
    },
    {
        path: '/assessment/:difficulty/:id',
        name: 'assessment',
        component: () => import( '@/views/AssessmentView.vue' ),
        meta: {
            title: 'Assessment'
        },
        props: true
    },
    {
        path: '/results',
        name: 'results',
        component: () => import( '@/views/ResultsHistoryView.vue' ),
        meta: {
            title: 'Results History'
        }
    },
    {
        path: '/assessment-result',
        name: 'assessment-result',
        component: () => import( '@/views/ResultsView.vue' ),
        meta: {
            title: 'Assessment Results'
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import( '@/views/SettingsView.vue' ),
        meta: {
            title: 'User Settings'
        }
    },
    {
        // Catch-all 404 route
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter( {
    history: createWebHistory(),
    routes
} );

// Update document title on route change
router.beforeEach( ( to, _from, next ) => {
    const title = to.meta.title as string | undefined;
    if ( title ) {
        document.title = title;
    }
    next();
} );

export default router;
