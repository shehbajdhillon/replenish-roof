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
            <Layout t_service_1_title={"Plumbing Services"} t_service_2_title={"Air Conditioning Services"} t_service_3_title={"Electrical Services"} t_phone_number={"(713) 730-2525"} t_footer_about_text_1={"John Moore has been serving Houston families with pride for over 50 years. We're a team of highly trained home service experts dedicated to our community."}  headerCls="transparent-header">
                <Banner1 t_banner_title_1={"John Moore"} t_banner_sub_title={"Houston's Trusted Complete Home Service Provider. Available 24/7."}/>
                <About1 t_about_tenure_1={"Over 50 years"} t_about_team_1={"Our team is the best in the business."} t_about_hype_1={"Over 50 years"} t_about_hype_2={"Highly skilled, thoroughly vetted experts"} t_about_hype_3={"Putting customers first since 1965"} t_about_text_1={"Get quality home services from the most experienced technicians."} />
                <Services1 t_service_1_title={"Plumbing Services"} t_service_2_title={"Air Conditioning Services"} t_service_3_title={"t_service_3_title"} t_service_1_tile_body={"From repairs to repiping, our licensed plumbers have you covered."} t_service_2_tile_body={"Keep your cool with our expert AC repair and installation services."} t_service_3_tile_body={"Safe, reliable electrical work by master electricians."}  />
                <Testimonial1 t_testimonial_text_1={"John Moore has serviced our home for years and we've always been impressed with their professionalism and quality work."} t_testimonial_text_2={"Their technicians are knowledgeable, friendly and got the job done right the first time. Highly recommend!"} t_testimonial_text_3={"John Moore is the company I trust for all my home services - plumbing, AC, electrical, you name it. They never disappoint."} />
                <Newsletter1 />
            </Layout>
        </>
    )
}