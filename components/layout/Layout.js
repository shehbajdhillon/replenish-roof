import { useEffect } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'
import PageHead from './PageHead'

export default function Layout({ headerCls, headerTop, headTitle, breadcrumbTitle, children, t_service_1_title, t_service_2_title, t_service_3_title, t_phone_number, t_footer_about_text_1 }) {
    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
    }, [])
    return (
        <>
            <PageHead headTitle={headTitle} />
            <DataBg />

            <Header headerCls={headerCls} headerTop={headerTop} />
            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>
            < Footer t_service_1_title={t_service_1_title} t_service_2_title={t_service_2_title} t_service_3_title={t_service_3_title} t_phone_number={t_phone_number} t_footer_about_text_1={t_footer_about_text_1} />
            <BackToTop />
        </>
    )
}
