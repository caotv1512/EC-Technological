import React from 'react'
import Header from '../../components/header/Header'
import FormSearch from '../../components/formSearch/FormSearch'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

export default function Router() {
  return (
    <>
    <Header></Header>
    <FormSearch></FormSearch>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
