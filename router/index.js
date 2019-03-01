import Vue from 'vue';
import Router from 'vue-router';

import PageWrapper from '../pages/PageWrapper.vue';
import SearchPage from '../pages/SearchPage.vue';
import TermsPage from '../pages/TermsPage.vue';
import PrivacyPage from '../pages/PrivacyPage.vue';
import CompanyPage from '../pages/CompanyPage.vue';
import StudiesPage from '../pages/StudiesPage.vue';
import FeaturesPage from '../pages/FeaturesPage.vue';
import TestimonialsPage from '../pages/TestimonialsPage.vue';
import EmailConfirmationPage from '../pages/EmailConfirmationPage.vue';
import PasswordResetPage from '../pages/PasswordResetPage.vue';
import HelpPage from '../pages/HelpPage.vue';
import Home from '@/components/Home';
import ResetPassword from '@/components/Auth/ResetPassword'

import Profile from '@/components/UserSettings/Profile/Profile';
import Account from '@/components/UserSettings/Account/Account';
import Notification from '@/components/UserSettings/Notification/Notification';
import ReferFriend from '@/components/UserSettings/ReferFriend/ReferFriend';
import BillingMethods from '@/components/UserSettings/BillingMethods/BillingMethods';

import NotesIndex from '@/components/Notes/NotesIndex'
import CreateFlashcard from '@/components/Notes/NoteCreate/CreateFlashcard';
import CreatePassage from '@/components/Notes/NoteCreate/CreatePassage';
import CreateBook from '@/components/Notes/NoteCreate/CreateBook';
import EditFlashcard from '@/components/Notes/NoteEdit/EditFlashcard';
import EditPassage from '@/components/Notes/NoteEdit/EditPassage';
import EditBook from '@/components/Notes/NoteEdit/EditBook';
import NoteView from '@/components/Notes/NoteView/NoteView';
import BrowseCoursesPage from '../components/UserBrowse/BrowseCoursesPage.vue';
import BrowseNotesPage from '../components/UserBrowse/BrowseNotesPage.vue';

import Courses from '@/components/UserStudy/Courses/Courses';
import Course from '@/components/UserStudy/Courses/Course';

import RecentActivity from '../components/UserRecent/RecentActivity.vue';


import store from "../store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/password/reset/:token',
      name: 'password-reset',
      component: ResetPassword,
      props: true
    },
    {
      path: '/confirm',
      name: 'email-confirmation',
      component: EmailConfirmationPage
    },
    {
      path: '/passwordreset',
      name: 'password-reset',
      component: PasswordResetPage
    },
    {
      path: '/settings',
      component: PageWrapper,
      children: [
        {
          path: '/',
          name: 'profile',
          component: Profile
        },
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path: 'notification',
          name: 'notification',
          component: Notification
        },
        {
          path: 'refer-friend',
          name: 'refer-friend',
          component: ReferFriend
        },
        {
          path: 'billing-methods',
          name: 'billing-methods',
          component: BillingMethods
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/study',
      redirect: '/study/courses'
    },
    {
      path: '/study/courses',
      name: 'user-study',
      component: PageWrapper,
      children: [
        {
          path: '/',
          name: 'courses',
          component: Courses
        },
        {
          path: ':id',
          name: 'course',
          component: Course
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/study/notes',
      component: PageWrapper,
      children: [
        {
          path: '/',
          name: 'notes',
          component: NotesIndex
        },
        {
          path: 'view/:id',
          name: 'view-note',
          component: NoteView
        },
        {
          path: 'flashcard',
          name: 'create-flashcard',
          component: CreateFlashcard
        },
        {
          path: 'passage',
          name: 'create-passage',
          component: CreatePassage
        },
        {
          path: 'book',
          name: 'create-book',
          component: CreateBook
        },
        {
          path: 'flashcard/:id',
          name: 'edit-flashcard',
          component: EditFlashcard
        },
        {
          path: 'passage/:id',
          name: 'edit-passage',
          component: EditPassage
        },
        {
          path: 'book/:id',
          name: 'edit-book',
          component: EditBook
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/browse',
      component: PageWrapper,
      children: [
        {
          path: 'notes',
          name: 'browse-notes',
          component: BrowseNotesPage
        },
        {
          path: 'courses',
          name: 'browse-courses',
          component: BrowseCoursesPage
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/recent',
      component: PageWrapper,
      children: [
        {
          path: '',
          name: 'recent',
          component: RecentActivity
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      component: PageWrapper,
      children: [
        {
          path: '',
          name: 'search',
          component: SearchPage
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about/terms',
      name: 'terms',
      component: TermsPage
    },
    {
      path: '/about/privacy',
      name: 'privacy',
      component: PrivacyPage
    },
    {
      path: '/about/company',
      name: 'company',
      component: CompanyPage
    },
    {
      path: '/about/studies',
      name: 'studies',
      component: StudiesPage
    },
    {
      path: '/about/testimonials',
      name: 'testimonials',
      component: TestimonialsPage
    },
    {
      path: '/about/features',
      name: 'features',
      component: FeaturesPage
    },
    {
      path: '/about/help',
      name: 'help',
      component: HelpPage
    }
  ],
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isAuth']) {
      next();
      return
    }
    next('/login')
  } else if (to.matched.some(record => record.meta.requiresGuest)){
    if (!store.getters['auth/isAuth']) {
      next();
      return
    }
    next('/')
  } else {
    next()
  }
});

export default router;
