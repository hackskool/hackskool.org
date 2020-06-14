import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import featureImage from "../../static/images/hero.jpg";

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <h1>Connecting educators to learners</h1>
            <p>HackSkool gives your complex the opportunity to increase the percentage of happiness<br/>and enjoyment of your staff and as a result, bring productivity to your workspace.</p>
            {/* <img alt={"Dashboard"} src={featureImage}/> */}
        </div>

        <div className={"container"}>
            <div className={"features"}>



            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Have any questions?</h2>
                    {/* <p>Sign up and start increasing the productivity of your business with HackSkool.</p> */}
                </div>

                <div className={"button"}>
                    <a href="mailto:hackskool@protonmail.com">Email Us</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
