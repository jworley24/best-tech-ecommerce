import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

import React from 'react'

import { Layout } from '../components'

import {StateContext} from '../context/StateContext'


export default function App({ Component, pageProps }) {
  return ( 
    <StateContext>
    
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>

    </StateContext>
  )
}

