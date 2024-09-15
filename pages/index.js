import Layout from "@/components/layout/Layout"

import Banner1 from "@/components/sections/Banner1"
import Brand1 from "@/components/sections/Brand1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Project1 from "@/components/sections/Project1"
import Team1 from "@/components/sections/Team1"
import Counter1 from "@/components/sections/Counter1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Blog1 from "@/components/sections/Blog1"
import Newsletter1 from "@/components/sections/Newsletter1"

export default function Home() {
    const companyLogoName = "$logo_name"
    const logo_name = "/assets/img/logo/" + companyLogoName
    return (
        <>
            <Layout t_service_1_title={"$t_service_1_title"} t_service_2_title={"$t_service_2_title"} t_service_3_title={"$t_service_3_title"} t_phone_number={"$t_phone_number"} t_footer_about_text_1={"$t_footer_about_text_1"}  headerCls="transparent-header">
                <Banner1 t_banner_title_1={"$t_banner_title_1"} t_banner_sub_title={"$t_banner_sub_title_1"}/>
                <About1 t_about_tenure_1={"$t_about_tenure_1"} t_about_team_1={"$t_about_team_1"} t_about_hype_1={"$t_about_hype_1"} t_about_hype_2={"$t_about_hype_2"} t_about_hype_3={"$t_about_hype_3"} t_about_text_1={"$t_about_text_1"} />
                <Services1 t_service_1_title={"$t_service_1_title"} t_service_2_title={"$t_service_2_title"} t_service_3_title={"t_service_3_title"} t_service_1_tile_body={"$t_service_1_tile_body"} t_service_2_tile_body={"$t_service_2_tile_body"} t_service_3_tile_body={"$t_service_3_tile_body"}  />
                <Testimonial1 t_testimonial_text_1={"$t_testimonial_text_1"} t_testimonial_text_2={"$t_testimonial_text_2"} t_testimonial_text_3={"$t_testimonial_text_3"} />
                <Newsletter1 />
            </Layout>
        </>
    )
}