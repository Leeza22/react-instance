import React from 'react';
import { Redirect } from 'react-router-dom';

import HXDiscover from '@/pages/discover';
import HXMine from '@/pages/mine';
import HXFriend from '@/pages/friend';
import HXPlayer from '@/pages/player';

const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));


const routes = [
  {
    path: '/',
    exact: true,
    render() {
      return <Redirect to="/discover"></Redirect>
    }
  },
  {
    path: '/discover',
    component: HXDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      }
    ]
  },
  {
    path: '/mine',
    component: HXMine
  },
  {
    path: '/friend',
    component: HXFriend
  },
  {
    path: '/player',
    component: HXPlayer
  }
]
export default routes