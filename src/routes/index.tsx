import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Indexing from '../pages/Indexing';

import Tutorial1 from '../pages/Tutorial1';
import Tutorial2 from '../pages/Tutorial2';
import Tutorial3 from '../pages/Tutorial3';
import Tutorial4 from '../pages/Tutorial4';
import Tutorial5 from '../pages/Tutorial5';
import Tutorial6 from '../pages/Tutorial6';
import Tutorial7 from '../pages/Tutorial7';
import Tutorial8 from '../pages/Tutorial8';

import Document1 from '../pages/Document1';
import DocumentRG from '../pages/DocumentRG';
import DocumentCNH from '../pages/DocumentCNH';

import CapturaRGFrente from '../pages/CapturaRGFrente';
import CapturaRGVerso from '../pages/CapturaRGVerso';
import CapturaRGFrenteVerso from '../pages/CapturaRGFrenteVerso';
import CapturaCNHFrente from '../pages/CapturaCNHFrente';
import CapturaCNHVerso from '../pages/CapturaCNHVerso';
import CapturaCNHFrenteVerso from '../pages/CapturaCNHFrenteVerso';

import ArchivePhoto from '../pages/ArchivePhoto';

import Ok from '../pages/Ok';
import Loading from '../pages/Loading';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Indexing" component={Indexing} />
    <Auth.Screen name="Tutorial1" component={Tutorial1} />
    <Auth.Screen name="Tutorial2" component={Tutorial2} />
    <Auth.Screen name="Tutorial3" component={Tutorial3} />
    <Auth.Screen name="Tutorial4" component={Tutorial4} />
    <Auth.Screen name="Tutorial5" component={Tutorial5} />
    <Auth.Screen name="Tutorial6" component={Tutorial6} />
    <Auth.Screen name="Tutorial7" component={Tutorial7} />
    <Auth.Screen name="Tutorial8" component={Tutorial8} />

    <Auth.Screen name="Document1" component={Document1} />
    <Auth.Screen name="DocumentRG" component={DocumentRG} />
    <Auth.Screen name="DocumentCNH" component={DocumentCNH} />

    <Auth.Screen name="CapturaRGFrente" component={CapturaRGFrente} />
    <Auth.Screen name="CapturaRGVerso" component={CapturaRGVerso} />
    <Auth.Screen name="CapturaRGFrenteVerso" component={CapturaRGFrenteVerso} />
    <Auth.Screen name="CapturaCNHFrente" component={CapturaCNHFrente} />
    <Auth.Screen name="CapturaCNHVerso" component={CapturaCNHVerso} />
    <Auth.Screen
      name="CapturaCNHFrenteVerso"
      component={CapturaCNHFrenteVerso}
    />
    <Auth.Screen name="ArchivePhoto" component={ArchivePhoto} />

    <Auth.Screen name="Ok" component={Ok} />
    <Auth.Screen name="Loading" component={Loading} />
  </Auth.Navigator>
);

export default AuthRoutes;
